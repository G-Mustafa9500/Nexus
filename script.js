// ============================================
// DATA INITIALIZATION
// ============================================

function initializeData() {
  if (!localStorage.getItem('nexus_users')) {
    var defaultUsers = [
      {
        id: 'user_1',
        username: 'alex_dev',
        email: 'alex@nexus.com',
        password: 'password123',
        bio: 'Full-stack developer | Coffee enthusiast | Building the future one line at a time',
        profilePic: '',
        followers: ['user_2', 'user_3'],
        following: ['user_2'],
        createdAt: Date.now() - 86400000 * 30
      },
      {
        id: 'user_2',
        username: 'sarah_design',
        email: 'sarah@nexus.com',
        password: 'password123',
        bio: 'UI/UX Designer | Minimalist | Creating beautiful experiences',
        profilePic: '',
        followers: ['user_1'],
        following: ['user_1', 'user_3'],
        createdAt: Date.now() - 86400000 * 20
      },
      {
        id: 'user_3',
        username: 'mike_photo',
        email: 'mike@nexus.com',
        password: 'password123',
        bio: 'Photographer | Traveler | Capturing moments that matter',
        profilePic: '',
        followers: ['user_1', 'user_2'],
        following: [],
        createdAt: Date.now() - 86400000 * 10
      }
    ];
    localStorage.setItem('nexus_users', JSON.stringify(defaultUsers));
  }

  if (!localStorage.getItem('nexus_posts')) {
    var defaultPosts = [
      {
        id: 'post_1',
        userId: 'user_1',
        content: 'Just shipped a new feature! Sometimes the best code is the code you delete. Clean, minimal, and it just works.',
        image: '',
        likes: ['user_2', 'user_3'],
        comments: [
          { id: 'c1', userId: 'user_2', content: 'Love this mindset! Less is more.', createdAt: Date.now() - 3600000 },
          { id: 'c2', userId: 'user_3', content: 'Congrats on the launch!', createdAt: Date.now() - 1800000 }
        ],
        createdAt: Date.now() - 7200000
      },
      {
        id: 'post_2',
        userId: 'user_2',
        content: 'Working on a new design system. Consistency is key to great user experiences. What are your favorite design principles?',
        image: '',
        likes: ['user_1'],
        comments: [
          { id: 'c3', userId: 'user_1', content: 'Accessibility first always!', createdAt: Date.now() - 5400000 }
        ],
        createdAt: Date.now() - 14400000
      },
      {
        id: 'post_3',
        userId: 'user_3',
        content: 'Golden hour never disappoints. Sometimes you just need to step away from the screen and appreciate the world around you.',
        image: '',
        likes: ['user_1', 'user_2'],
        comments: [],
        createdAt: Date.now() - 28800000
      }
    ];
    localStorage.setItem('nexus_posts', JSON.stringify(defaultPosts));
  }

  if (!localStorage.getItem('nexus_stories')) {
    var defaultStories = [
      {
        id: 'story_1',
        userId: 'user_2',
        image: '',
        createdAt: Date.now() - 3600000
      },
      {
        id: 'story_2',
        userId: 'user_3',
        image: '',
        createdAt: Date.now() - 7200000
      }
    ];
    localStorage.setItem('nexus_stories', JSON.stringify(defaultStories));
  }

  if (!localStorage.getItem('nexus_messages')) {
    localStorage.setItem('nexus_messages', JSON.stringify([]));
  }

  if (!localStorage.getItem('nexus_notifications')) {
    localStorage.setItem('nexus_notifications', JSON.stringify([]));
  }
}

// ============================================
// STATE MANAGEMENT
// ============================================

var currentUser = null;
var currentPostId = null;
var currentChatUser = null;
var storyTimer = null;
var currentPage = 'login';

// Initialize data before anything else
initializeData();

// ============================================
// UTILITY FUNCTIONS
// ============================================

function generateId(prefix) {
  return prefix + '_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function formatTime(timestamp) {
  var diff = Date.now() - timestamp;
  var minutes = Math.floor(diff / 60000);
  var hours = Math.floor(diff / 3600000);
  var days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'Just now';
  if (minutes < 60) return minutes + 'm ago';
  if (hours < 24) return hours + 'h ago';
  if (days < 7) return days + 'd ago';
  return new Date(timestamp).toLocaleDateString();
}

function getData(key) {
  var data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

function setData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function showToast(message, type) {
  if (typeof type === 'undefined') type = 'info';
  var container = document.getElementById('toastContainer');
  var toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.innerHTML = '<span>' + message + '</span>';
  container.appendChild(toast);
  setTimeout(function() {
    toast.remove();
  }, 3000);
}

function getInitials(name) {
  if (!name) return '?';
  return name.charAt(0).toUpperCase();
}

function escapeHtml(text) {
  var div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ============================================
// AUTH FUNCTIONS
// ============================================

function checkAuth() {
  var session = localStorage.getItem('nexus_session');
  if (session) {
    currentUser = JSON.parse(session);
    return true;
  }
  return false;
}

function login(email, password) {
  var users = getData('nexus_users');
  var user = users.find(function(u) { return u.email === email && u.password === password; });
  if (user) {
    currentUser = user;
    localStorage.setItem('nexus_session', JSON.stringify(user));
    return true;
  }
  return false;
}

function signup(username, email, password) {
  var users = getData('nexus_users');
  if (users.find(function(u) { return u.email === email; })) {
    return { success: false, message: 'Email already exists' };
  }
  if (users.find(function(u) { return u.username === username; })) {
    return { success: false, message: 'Username already taken' };
  }
  var newUser = {
    id: generateId('user'),
    username: username,
    email: email,
    password: password,
    bio: '',
    profilePic: '',
    followers: [],
    following: [],
    createdAt: Date.now()
  };
  users.push(newUser);
  setData('nexus_users', users);
  currentUser = newUser;
  localStorage.setItem('nexus_session', JSON.stringify(newUser));
  return { success: true };
}

function logout() {
  currentUser = null;
  localStorage.removeItem('nexus_session');
  navigateTo('login');
}

// ============================================
// ROUTING
// ============================================

function navigateTo(page) {
  window.location.hash = '/' + page;
}

function handleRoute() {
  var hash = window.location.hash.slice(2) || 'feed';
  currentPage = hash;
  
  var protectedPages = ['feed', 'explore', 'profile', 'chat', 'notifications'];
  
  if (protectedPages.indexOf(hash) !== -1 && !checkAuth()) {
    renderLoginPage();
    return;
  }

  if ((hash === 'login' || hash === 'signup') && checkAuth()) {
    navigateTo('feed');
    return;
  }

  switch(hash) {
    case 'login':
      renderLoginPage();
      break;
    case 'signup':
      renderSignupPage();
      break;
    case 'feed':
      renderFeedPage();
      break;
    case 'explore':
      renderExplorePage();
      break;
    case 'profile':
      renderProfilePage();
      break;
    case 'chat':
      renderChatPage();
      break;
    case 'notifications':
      renderNotificationsPage();
      break;
    default:
      renderFeedPage();
  }

  updateNavigation(hash);
}

function updateNavigation(activePage) {
  var links = document.querySelectorAll('[data-page]');
  links.forEach(function(link) {
    link.classList.remove('active');
    if (link.dataset.page === activePage) {
      link.classList.add('active');
    }
  });
}

// ============================================
// PAGE RENDERERS
// ============================================

function renderLoginPage() {
  document.getElementById('mainNav').classList.add('nav-hidden');
  document.getElementById('mobileNav').style.display = 'none';
  
  var main = document.getElementById('mainContent');
  main.className = 'main-content no-nav';
  
  main.innerHTML = '\
    <div class="auth-container">\
      <div class="auth-card glass">\
        <div class="auth-logo">\
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>\
            <path d="M2 17l10 5 10-5"/>\
            <path d="M2 12l10 5 10-5"/>\
          </svg>\
          <span>Nexus</span>\
        </div>\
        <div class="auth-header">\
          <h1>Welcome Back</h1>\
          <p>Sign in to continue to Nexus</p>\
        </div>\
        <form id="loginForm">\
          <div class="form-group">\
            <label class="form-label">Email</label>\
            <input type="email" class="form-input" id="loginEmail" placeholder="Enter your email" required>\
          </div>\
          <div class="form-group">\
            <label class="form-label">Password</label>\
            <input type="password" class="form-input" id="loginPassword" placeholder="Enter your password" required>\
          </div>\
          <button type="submit" class="btn btn-primary">Sign In</button>\
        </form>\
        <div class="auth-footer">\
          <p>Don\'t have an account? <a id="gotoSignup">Sign up</a></p>\
        </div>\
      </div>\
    </div>\
  ';

  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    
    if (login(email, password)) {
      showToast('Welcome back!', 'success');
      navigateTo('feed');
    } else {
      showToast('Invalid email or password', 'error');
    }
  });

  document.getElementById('gotoSignup').addEventListener('click', function(e) {
    e.preventDefault();
    navigateTo('signup');
  });
}

function renderSignupPage() {
  document.getElementById('mainNav').classList.add('nav-hidden');
  document.getElementById('mobileNav').style.display = 'none';
  
  var main = document.getElementById('mainContent');
  main.className = 'main-content no-nav';
  
  main.innerHTML = '\
    <div class="auth-container">\
      <div class="auth-card glass">\
        <div class="auth-logo">\
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>\
            <path d="M2 17l10 5 10-5"/>\
            <path d="M2 12l10 5 10-5"/>\
          </svg>\
          <span>Nexus</span>\
        </div>\
        <div class="auth-header">\
          <h1>Create Account</h1>\
          <p>Join Nexus and connect with others</p>\
        </div>\
        <form id="signupForm">\
          <div class="form-group">\
            <label class="form-label">Username</label>\
            <input type="text" class="form-input" id="signupUsername" placeholder="Choose a username" required>\
          </div>\
          <div class="form-group">\
            <label class="form-label">Email</label>\
            <input type="email" class="form-input" id="signupEmail" placeholder="Enter your email" required>\
          </div>\
          <div class="form-group">\
            <label class="form-label">Password</label>\
            <input type="password" class="form-input" id="signupPassword" placeholder="Create a password" required>\
          </div>\
          <button type="submit" class="btn btn-primary">Create Account</button>\
        </form>\
        <div class="auth-footer">\
          <p>Already have an account? <a id="gotoLogin">Sign in</a></p>\
        </div>\
      </div>\
    </div>\
  ';

  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('signupUsername').value;
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    
    var result = signup(username, email, password);
    if (result.success) {
      showToast('Account created successfully!', 'success');
      navigateTo('feed');
    } else {
      showToast(result.message, 'error');
    }
  });

  document.getElementById('gotoLogin').addEventListener('click', function(e) {
    e.preventDefault();
    navigateTo('login');
  });
}

function renderFeedPage() {
  if (!checkAuth()) return;
  
  document.getElementById('mainNav').classList.remove('nav-hidden');
  if (window.innerWidth <= 768) {
    document.getElementById('mobileNav').style.display = 'flex';
  }
  
  var main = document.getElementById('mainContent');
  main.className = 'main-content';
  
  updateNavAvatar();
  updateNotificationBadge();
  
  main.innerHTML = '\
    <section class="stories-container">\
      <div class="stories-list" id="storiesList"></div>\
    </section>\
    <div class="feed-layout">\
      <div class="feed-main">\
        <div class="create-post glass">\
          <div class="create-post-header">\
            <div id="createPostAvatar"></div>\
            <textarea placeholder="What\'s on your mind?" id="postContent"></textarea>\
          </div>\
          <div id="imagePreviewContainer"></div>\
          <div class="create-post-actions">\
            <label class="image-upload-btn">\
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>\
                <circle cx="8.5" cy="8.5" r="1.5"/>\
                <polyline points="21,15 16,10 5,21"/>\
              </svg>\
              Photo\
              <input type="file" accept="image/*" class="hidden-input" id="postImageInput">\
            </label>\
            <button class="btn btn-primary" id="createPostBtn" style="width: auto; padding: 12px 24px;">Post</button>\
          </div>\
        </div>\
        <div id="postsContainer"></div>\
      </div>\
      <aside class="sidebar">\
        <div class="sidebar-card glass">\
          <h3 class="sidebar-title">Suggested for you</h3>\
          <div id="suggestedUsers"></div>\
        </div>\
      </aside>\
    </div>\
  ';

  renderStories();
  renderPosts();
  renderSuggestedUsers();
  setupCreatePost();
}

function renderExplorePage() {
  if (!checkAuth()) return;
  
  document.getElementById('mainNav').classList.remove('nav-hidden');
  updateNavAvatar();
  
  var main = document.getElementById('mainContent');
  main.className = 'main-content';
  
  var posts = getData('nexus_posts');
  var users = getData('nexus_users');
  
  var postsGrid = '';
  posts.slice().reverse().forEach(function(post) {
    var user = users.find(function(u) { return u.id === post.userId; });
    if (user && post.image) {
      postsGrid += '\
        <div class="profile-grid-item">\
          <img src="' + post.image + '" alt="Post">\
          <div class="overlay">\
            <span class="overlay-stat">\
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">\
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>\
              </svg>\
              ' + post.likes.length + '\
            </span>\
            <span class="overlay-stat">\
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>\
              </svg>\
              ' + post.comments.length + '\
            </span>\
          </div>\
        </div>\
      ';
    }
  });

  main.innerHTML = '\
    <h2 style="margin-bottom: 24px;">Explore</h2>\
    <div class="profile-grid">\
      ' + (postsGrid || '<p style="grid-column: 1/-1; text-align: center; color: var(--fg-secondary);">No image posts to explore yet</p>') + '\
    </div>\
  ';
}

function renderProfilePage() {
  if (!checkAuth()) return;
  
  document.getElementById('mainNav').classList.remove('nav-hidden');
  updateNavAvatar();
  
  var main = document.getElementById('mainContent');
  main.className = 'main-content';
  
  var users = getData('nexus_users');
  var posts = getData('nexus_posts');
  var user = users.find(function(u) { return u.id === currentUser.id; });
  var userPosts = posts.filter(function(p) { return p.userId === currentUser.id; });

  var avatarHtml = '';
  if (user.profilePic) {
    avatarHtml = '<img src="' + user.profilePic + '" alt="' + user.username + '" class="profile-avatar-large">';
  } else {
    avatarHtml = '<div class="profile-avatar-large placeholder-avatar">' + getInitials(user.username) + '</div>';
  }

  var postsGrid = '';
  userPosts.slice().reverse().forEach(function(post) {
    var likesCount = post.likes ? post.likes.length : 0;
    var commentsCount = post.comments ? post.comments.length : 0;
    
    if (post.image) {
      postsGrid += '\
        <div class="profile-grid-item">\
          <img src="' + post.image + '" alt="Post">\
          <div class="overlay">\
            <span class="overlay-stat">\
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">\
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>\
              </svg>\
              ' + likesCount + '\
            </span>\
            <span class="overlay-stat">\
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>\
              </svg>\
              ' + commentsCount + '\
            </span>\
          </div>\
        </div>\
      ';
    }
  });

  main.innerHTML = '\
    <div class="profile-header">\
      ' + avatarHtml + '\
      <div class="profile-info">\
        <h1 class="profile-username">' + user.username + '</h1>\
        <div class="profile-stats">\
          <div class="profile-stat">\
            <strong>' + userPosts.length + '</strong>\
            <span>Posts</span>\
          </div>\
          <div class="profile-stat">\
            <strong>' + (user.followers ? user.followers.length : 0) + '</strong>\
            <span>Followers</span>\
          </div>\
          <div class="profile-stat">\
            <strong>' + (user.following ? user.following.length : 0) + '</strong>\
            <span>Following</span>\
          </div>\
        </div>\
        <p class="profile-bio">' + (user.bio || 'No bio yet') + '</p>\
        <div class="profile-actions">\
          <button class="btn btn-secondary" id="editProfileBtn">Edit Profile</button>\
        </div>\
      </div>\
    </div>\
    <h3 style="margin-bottom: 16px;">Posts</h3>\
    <div class="profile-grid">\
      ' + (postsGrid || '<p style="grid-column: 1/-1; text-align: center; color: var(--fg-secondary);">No posts yet. Create your first post!</p>') + '\
    </div>\
  ';

  document.getElementById('editProfileBtn').addEventListener('click', function() {
    openEditProfileModal();
  });
}

function renderChatPage() {
  if (!checkAuth()) return;
  
  document.getElementById('mainNav').classList.remove('nav-hidden');
  updateNavAvatar();
  
  var main = document.getElementById('mainContent');
  main.className = 'main-content';
  
  var users = getData('nexus_users');
  var messages = getData('nexus_messages');
  var otherUsers = users.filter(function(u) { return u.id !== currentUser.id; });

  var chatListHtml = '';
  otherUsers.forEach(function(user) {
    var userMessages = messages.filter(function(m) {
      return (m.fromId === currentUser.id && m.toId === user.id) || 
             (m.fromId === user.id && m.toId === currentUser.id);
    });
    var lastMessage = userMessages[userMessages.length - 1];
    var unreadCount = messages.filter(function(m) {
      return m.fromId === user.id && m.toId === currentUser.id && !m.read;
    }).length;

    var avatarHtml = '';
    if (user.profilePic) {
      avatarHtml = '<img src="' + user.profilePic + '" alt="' + user.username + '">';
    } else {
      avatarHtml = '<div class="placeholder-avatar" style="width:48px;height:48px;border-radius:50%;">' + getInitials(user.username) + '</div>';
    }

    chatListHtml += '\
      <div class="chat-list-item" data-user-id="' + user.id + '">\
        ' + avatarHtml + '\
        <div class="chat-list-item-info">\
          <h4>' + user.username + '</h4>\
          <p class="' + (unreadCount > 0 ? 'unread' : '') + '">' + (lastMessage ? lastMessage.content.substring(0, 30) + (lastMessage.content.length > 30 ? '...' : '') : 'No messages yet') + '</p>\
        </div>\
        ' + (unreadCount > 0 ? '<span class="unread-badge">' + unreadCount + '</span>' : '') + '\
      </div>\
    ';
  });

  main.innerHTML = '\
    <div class="chat-container glass">\
      <div class="chat-list-panel">\
        <div class="chat-list-header">\
          <h3>Messages</h3>\
        </div>\
        <div class="chat-list" id="chatList">\
          ' + (chatListHtml || '<div class="empty-state"><p>No users to chat with</p></div>') + '\
        </div>\
      </div>\
      <div class="chat-panel">\
        <div class="chat-header">\
          <div id="chatUserAvatar"></div>\
          <h4 id="chatUserName">Select a conversation</h4>\
        </div>\
        <div class="chat-messages" id="chatMessages">\
          <div class="empty-state">\
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>\
            </svg>\
            <h3>Your Messages</h3>\
            <p>Select a user to start chatting</p>\
          </div>\
        </div>\
        <div class="chat-input-area" id="chatInputArea" style="display: none;">\
          <input type="text" placeholder="Type a message..." id="messageInput">\
          <button id="sendMessageBtn">\
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\
              <line x1="22" y1="2" x2="11" y2="13"/>\
              <polygon points="22,2 15,22 11,13 2,9"/>\
            </svg>\
          </button>\
        </div>\
      </div>\
    </div>\
  ';

  setupChatInteractions();
}

function renderNotificationsPage() {
  if (!checkAuth()) return;
  
  document.getElementById('mainNav').classList.remove('nav-hidden');
  updateNavAvatar();
  
  var main = document.getElementById('mainContent');
  main.className = 'main-content';
  
  var notifications = getData('nexus_notifications');
  var users = getData('nexus_users');
  var userNotifications = notifications.filter(function(n) { return n.toId === currentUser.id; });

  var notifHtml = '';
  userNotifications.slice().reverse().forEach(function(notif) {
    var fromUser = users.find(function(u) { return u.id === notif.fromId; });
    if (!fromUser) return;

    var message = '';
    if (notif.type === 'like') {
      message = '<strong>' + fromUser.username + '</strong> liked your post';
    } else if (notif.type === 'comment') {
      message = '<strong>' + fromUser.username + '</strong> commented: "' + notif.content.substring(0, 30) + '"';
    } else if (notif.type === 'follow') {
      message = '<strong>' + fromUser.username + '</strong> started following you';
    } else if (notif.type === 'message') {
      message = '<strong>' + fromUser.username + '</strong> sent you a message';
    }

    var avatarHtml = '';
    if (fromUser.profilePic) {
      avatarHtml = '<img src="' + fromUser.profilePic + '" alt="' + fromUser.username + '">';
    } else {
      avatarHtml = '<div class="placeholder-avatar" style="width:48px;height:48px;border-radius:50%;">' + getInitials(fromUser.username) + '</div>';
    }

    notifHtml += '\
      <div class="notification-item ' + (notif.read ? '' : 'unread') + '" data-notif-id="' + notif.id + '">\
        ' + avatarHtml + '\
        <div class="notification-content">\
          <p>' + message + '</p>\
          <span class="notification-time">' + formatTime(notif.createdAt) + '</span>\
        </div>\
      </div>\
    ';
  });

  main.innerHTML = '\
    <h2 style="margin-bottom: 24px;">Notifications</h2>\
    <div class="notifications-list">\
      ' + (notifHtml || '<div class="empty-state"><h3>No notifications yet</h3><p>When someone likes, comments, or follows you, it will show up here</p></div>') + '\
    </div>\
  ';

  // Mark notifications as read
  var updatedNotifs = notifications.map(function(n) {
    if (n.toId === currentUser.id) {
      n.read = true;
    }
    return n;
  });
  setData('nexus_notifications', updatedNotifs);
  updateNotificationBadge();
}

// ============================================
// COMPONENT RENDERERS
// ============================================

function renderStories() {
  var stories = getData('nexus_stories');
  var users = getData('nexus_users');
  
  // Filter stories within 24 hours
  var validStories = stories.filter(function(s) { 
    return Date.now() - s.createdAt < 86400000; 
  });

  var storiesHtml = '\
    <div class="story-item" id="addStoryBtn">\
      <div class="story-ring story-add"></div>\
      <span>Add Story</span>\
    </div>\
  ';

  validStories.forEach(function(story) {
    var user = users.find(function(u) { return u.id === story.userId; });
    if (!user) return;

    var avatarInner = '';
    if (user.profilePic) {
      avatarInner = '<img src="' + user.profilePic + '" alt="' + user.username + '">';
    } else {
      avatarInner = '<div class="placeholder-avatar" style="width:100%;height:100%;border-radius:50%;">' + getInitials(user.username) + '</div>';
    }

    storiesHtml += '\
      <div class="story-item" data-story-id="' + story.id + '" data-user-id="' + story.userId + '">\
        <div class="story-ring">' + avatarInner + '</div>\
        <span>' + user.username + '</span>\
      </div>\
    ';
  });

  document.getElementById('storiesList').innerHTML = storiesHtml;
  setupStoryInteractions();
}

function renderPosts() {
  var posts = getData('nexus_posts');
  var users = getData('nexus_users');
  
  var postsHtml = '';
  posts.slice().reverse().forEach(function(post, index) {
    var user = users.find(function(u) { return u.id === post.userId; });
    if (!user) return;

    var isLiked = post.likes && post.likes.indexOf(currentUser.id) !== -1;
    
    var avatarHtml = '';
    if (user.profilePic) {
      avatarHtml = '<img src="' + user.profilePic + '" alt="' + user.username + '" class="post-avatar">';
    } else {
      avatarHtml = '<div class="post-avatar placeholder-avatar">' + getInitials(user.username) + '</div>';
    }

    var imageHtml = '';
    if (post.image) {
      imageHtml = '<img src="' + post.image + '" alt="Post image" class="post-image">';
    }

    var likesCount = post.likes ? post.likes.length : 0;
    var commentsCount = post.comments ? post.comments.length : 0;

    postsHtml += '\
      <article class="post-card" style="animation-delay: ' + (index * 0.08) + 's;">\
        <div class="post-header">\
          ' + avatarHtml + '\
          <div class="post-user-info">\
            <span class="post-username">' + user.username + '</span>\
            <span class="post-time">' + formatTime(post.createdAt) + '</span>\
          </div>\
          <button class="post-menu-btn" aria-label="More options">\
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\
              <circle cx="12" cy="5" r="1.5"/>\
              <circle cx="12" cy="12" r="1.5"/>\
              <circle cx="12" cy="19" r="1.5"/>\
            </svg>\
          </button>\
        </div>\
        <p class="post-content">' + escapeHtml(post.content) + '</p>\
        ' + imageHtml + '\
        <div class="post-stats">\
          <div class="post-stats-left">\
            <span class="like-icon-mini">\
              <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>\
            </span>\
            <strong>' + likesCount + '</strong>&nbsp;likes\
          </div>\
          <span class="stats-comment-link" data-post-id="' + post.id + '" data-action="comment-link">\
            ' + commentsCount + ' comments\
          </span>\
        </div>\
        <div class="post-actions">\
          <button class="action-btn ' + (isLiked ? 'liked' : '') + '" data-post-id="' + post.id + '" data-action="like">\
            <svg viewBox="0 0 24 24" fill="' + (isLiked ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="2">\
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>\
            </svg>\
            <span>Like</span>\
          </button>\
          <button class="action-btn" data-post-id="' + post.id + '" data-action="comment">\
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>\
            </svg>\
            <span>Comment</span>\
          </button>\
        </div>\
      </article>\
    ';
  });

  document.getElementById('postsContainer').innerHTML = postsHtml || '<div class="empty-state"><h3>No posts yet</h3><p>Be the first to post something!</p></div>';
  
  // Setup avatar for create post
  var avatarContainer = document.getElementById('createPostAvatar');
  if (avatarContainer) {
    avatarContainer.innerHTML = '';
    if (currentUser.profilePic) {
      avatarContainer.innerHTML = '<img src="' + currentUser.profilePic + '" alt="' + currentUser.username + '" style="width:44px;height:44px;border-radius:10px;object-fit:cover;">';
    } else {
      avatarContainer.innerHTML = '<div class="placeholder-avatar" style="width:44px;height:44px;border-radius:10px;">' + getInitials(currentUser.username) + '</div>';
    }
  }

  setupPostInteractions();
}

function renderSuggestedUsers() {
  var users = getData('nexus_users');
  var otherUsers = users.filter(function(u) { 
    return u.id !== currentUser.id && 
           (!currentUser.following || currentUser.following.indexOf(u.id) === -1); 
  }).slice(0, 3);

  var suggestedHtml = '';
  otherUsers.forEach(function(user) {
    var avatarHtml = '';
    if (user.profilePic) {
      avatarHtml = '<img src="' + user.profilePic + '" alt="' + user.username + '">';
    } else {
      avatarHtml = '<div class="placeholder-avatar" style="width:44px;height:44px;border-radius:50%;">' + getInitials(user.username) + '</div>';
    }

    var isFollowing = currentUser.following && currentUser.following.indexOf(user.id) !== -1;

    suggestedHtml += '\
      <div class="suggested-user">\
        ' + avatarHtml + '\
        <div class="suggested-user-info">\
          <h4>' + user.username + '</h4>\
          <p>Suggested for you</p>\
        </div>\
        <button class="follow-btn ' + (isFollowing ? 'following' : '') + '" data-user-id="' + user.id + '">\
          ' + (isFollowing ? 'Following' : 'Follow') + '\
        </button>\
      </div>\
    ';
  });

  document.getElementById('suggestedUsers').innerHTML = suggestedHtml || '<p style="color: var(--fg-muted);">No suggestions</p>';
  setupFollowButtons();
}

function renderComments(postId) {
  var posts = getData('nexus_posts');
  var users = getData('nexus_users');
  var post = posts.find(function(p) { return p.id === postId; });
  
  if (!post || !post.comments) {
    document.getElementById('commentsList').innerHTML = '<p style="text-align:center;color:var(--fg-muted);">No comments yet</p>';
    return;
  }

  var commentsHtml = '';
  post.comments.forEach(function(comment) {
    var user = users.find(function(u) { return u.id === comment.userId; });
    if (!user) return;

    var avatarHtml = '';
    if (user.profilePic) {
      avatarHtml = '<img src="' + user.profilePic + '" alt="' + user.username + '">';
    } else {
      avatarHtml = '<div class="placeholder-avatar" style="width:36px;height:36px;border-radius:50%;font-size:0.8rem;">' + getInitials(user.username) + '</div>';
    }

    commentsHtml += '\
      <div class="comment-item">\
        ' + avatarHtml + '\
        <div class="comment-content">\
          <h4>' + user.username + '</h4>\
          <p>' + escapeHtml(comment.content) + '</p>\
          <span class="comment-time">' + formatTime(comment.createdAt) + '</span>\
        </div>\
      </div>\
    ';
  });

  document.getElementById('commentsList').innerHTML = commentsHtml || '<p style="text-align:center;color:var(--fg-muted);">No comments yet</p>';
}

// ============================================
// INTERACTION HANDLERS
// ============================================

function setupCreatePost() {
  var imageInput = document.getElementById('postImageInput');
  var createBtn = document.getElementById('createPostBtn');
  var previewContainer = document.getElementById('imagePreviewContainer');
  var selectedImage = null;

  if (imageInput) {
    imageInput.addEventListener('change', function(e) {
      var file = e.target.files[0];
      if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
          selectedImage = e.target.result;
          previewContainer.innerHTML = '\
            <div class="image-preview">\
              <img src="' + selectedImage + '" alt="Preview">\
              <button class="remove-image" id="removeImageBtn">&times;</button>\
            </div>\
          ';
          document.getElementById('removeImageBtn').addEventListener('click', function() {
            selectedImage = null;
            previewContainer.innerHTML = '';
            imageInput.value = '';
          });
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (createBtn) {
    createBtn.addEventListener('click', function() {
      var content = document.getElementById('postContent').value.trim();
      if (!content && !selectedImage) {
        showToast('Please add some content or an image', 'error');
        return;
      }

      var posts = getData('nexus_posts');
      var newPost = {
        id: generateId('post'),
        userId: currentUser.id,
        content: content,
        image: selectedImage || '',
        likes: [],
        comments: [],
        createdAt: Date.now()
      };
      posts.push(newPost);
      setData('nexus_posts', posts);

      document.getElementById('postContent').value = '';
      previewContainer.innerHTML = '';
      selectedImage = null;
      showToast('Post created!', 'success');
      renderPosts();
    });
  }
}

function setupPostInteractions() {
  // Like buttons
  document.querySelectorAll('[data-action="like"]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      toggleLike(this.dataset.postId);
    });
  });

  // Comment buttons
  document.querySelectorAll('[data-action="comment"]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      openCommentsModal(this.dataset.postId);
    });
  });

  // Comment link in stats (naya addition)
  document.querySelectorAll('[data-action="comment-link"]').forEach(function(link) {
    link.addEventListener('click', function() {
      openCommentsModal(this.dataset.postId);
    });
  });
}

function toggleLike(postId) {
  var posts = getData('nexus_posts');
  var post = posts.find(function(p) { return p.id === postId; });
  if (!post) return;

  if (!post.likes) post.likes = [];
  
  var likeIndex = post.likes.indexOf(currentUser.id);
  if (likeIndex > -1) {
    post.likes.splice(likeIndex, 1);
  } else {
    post.likes.push(currentUser.id);
    // Create notification
    if (post.userId !== currentUser.id) {
      createNotification('like', currentUser.id, post.userId, postId);
    }
  }

  setData('nexus_posts', posts);
  renderPosts();
}

function openCommentsModal(postId) {
  currentPostId = postId;
  renderComments(postId);
  document.getElementById('commentsModal').classList.add('active');
}

function closeCommentsModal() {
  document.getElementById('commentsModal').classList.remove('active');
  currentPostId = null;
}

function addComment(content) {
  if (!currentPostId || !content.trim()) return;

  var posts = getData('nexus_posts');
  var post = posts.find(function(p) { return p.id === currentPostId; });
  if (!post) return;

  if (!post.comments) post.comments = [];
  
  var newComment = {
    id: generateId('comment'),
    userId: currentUser.id,
    content: content.trim(),
    createdAt: Date.now()
  };
  post.comments.push(newComment);
  setData('nexus_posts', posts);

  // Create notification
  if (post.userId !== currentUser.id) {
    createNotification('comment', currentUser.id, post.userId, currentPostId, content);
  }

  renderComments(currentPostId);
  showToast('Comment added!', 'success');
}

function setupFollowButtons() {
  document.querySelectorAll('.follow-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var targetUserId = this.dataset.userId;
      toggleFollow(targetUserId);
    });
  });
}

function toggleFollow(targetUserId) {
  var users = getData('nexus_users');
  var currentUserData = users.find(function(u) { return u.id === currentUser.id; });
  var targetUser = users.find(function(u) { return u.id === targetUserId; });

  if (!currentUserData || !targetUser) return;

  if (!currentUserData.following) currentUserData.following = [];
  if (!targetUser.followers) targetUser.followers = [];

  var followIndex = currentUserData.following.indexOf(targetUserId);
  if (followIndex > -1) {
    currentUserData.following.splice(followIndex, 1);
    var followerIndex = targetUser.followers.indexOf(currentUser.id);
    if (followerIndex > -1) {
      targetUser.followers.splice(followerIndex, 1);
    }
  } else {
    currentUserData.following.push(targetUserId);
    targetUser.followers.push(currentUser.id);
    createNotification('follow', currentUser.id, targetUserId);
  }

  setData('nexus_users', users);
  currentUser = currentUserData;
  localStorage.setItem('nexus_session', JSON.stringify(currentUserData));
  
  renderSuggestedUsers();
  showToast(followIndex > -1 ? 'Unfollowed' : 'Following!', 'success');
}

function setupStoryInteractions() {
  document.querySelectorAll('.story-item[data-story-id]').forEach(function(item) {
    item.addEventListener('click', function() {
      var storyId = this.dataset.storyId;
      openStory(storyId);
    });
  });

  var addStoryBtn = document.getElementById('addStoryBtn');
  if (addStoryBtn) {
    addStoryBtn.addEventListener('click', function() {
      var input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = function(e) {
        var file = e.target.files[0];
        if (file) {
          var reader = new FileReader();
          reader.onload = function(e) {
            var stories = getData('nexus_stories');
            stories.push({
              id: generateId('story'),
              userId: currentUser.id,
              image: e.target.result,
              createdAt: Date.now()
            });
            setData('nexus_stories', stories);
            showToast('Story added!', 'success');
            renderStories();
          };
          reader.readAsDataURL(file);
        }
      };
      input.click();
    });
  }
}

function openStory(storyId) {
  var stories = getData('nexus_stories');
  var users = getData('nexus_users');
  var story = stories.find(function(s) { return s.id === storyId; });
  
  if (!story) return;
  
  var user = users.find(function(u) { return u.id === story.userId; });
  if (!user) return;

  var modal = document.getElementById('storyModal');
  var image = document.getElementById('storyImage');
  var avatar = document.getElementById('storyUserAvatar');
  var username = document.getElementById('storyUsername');
  var progress = document.getElementById('storyProgress');

  image.src = story.image || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600"><rect fill="%23161619"/><text x="50%" y="50%" text-anchor="middle" fill="%23a1a1aa" font-family="sans-serif">No image</text></svg>';
  
  if (user.profilePic) {
    avatar.src = user.profilePic;
  } else {
    avatar.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><rect fill="%232dd4bf" width="36" height="36" rx="18"/><text x="50%" y="50%" text-anchor="middle" dy="0.35em" fill="white" font-family="sans-serif" font-weight="600">' + getInitials(user.username) + '</text></svg>';
  }
  
  username.textContent = user.username;
  modal.classList.add('active');

  // Progress animation
  var width = 0;
  if (storyTimer) clearInterval(storyTimer);
  storyTimer = setInterval(function() {
    width += 0.5;
    progress.style.width = width + '%';
    if (width >= 100) {
      clearInterval(storyTimer);
      closeStory();
    }
  }, 50);
}

function closeStory() {
  document.getElementById('storyModal').classList.remove('active');
  if (storyTimer) {
    clearInterval(storyTimer);
    storyTimer = null;
  }
  document.getElementById('storyProgress').style.width = '0';
}

function setupChatInteractions() {
  document.querySelectorAll('.chat-list-item').forEach(function(item) {
    item.addEventListener('click', function() {
      var userId = this.dataset.userId;
      openChat(userId);
      
      document.querySelectorAll('.chat-list-item').forEach(function(i) { i.classList.remove('active'); });
      this.classList.add('active');
    }.bind(this));
  });
}

function openChat(userId) {
  currentChatUser = userId;
  var users = getData('nexus_users');
  var user = users.find(function(u) { return u.id === userId; });
  
  if (!user) return;

  var nameEl = document.getElementById('chatUserName');
  var avatarEl = document.getElementById('chatUserAvatar');
  var inputArea = document.getElementById('chatInputArea');

  nameEl.textContent = user.username;
  avatarEl.innerHTML = '';
  if (user.profilePic) {
    avatarEl.innerHTML = '<img src="' + user.profilePic + '" alt="' + user.username + '" style="width:40px;height:40px;border-radius:50%;object-fit:cover;">';
  } else {
    avatarEl.innerHTML = '<div class="placeholder-avatar" style="width:40px;height:40px;border-radius:50%;font-size:1rem;">' + getInitials(user.username) + '</div>';
  }
  inputArea.style.display = 'flex';

  // Mark messages as read
  var messages = getData('nexus_messages');
  var updated = messages.map(function(m) {
    if (m.fromId === userId && m.toId === currentUser.id) {
      m.read = true;
    }
    return m;
  });
  setData('nexus_messages', updated);
  updateNotificationBadge();

  renderMessages(userId);
}

function renderMessages(userId) {
  var messages = getData('nexus_messages');
  var userMessages = messages.filter(function(m) {
    return (m.fromId === currentUser.id && m.toId === userId) || 
           (m.fromId === userId && m.toId === currentUser.id);
  });

  var container = document.getElementById('chatMessages');
  var messagesHtml = '';

  userMessages.forEach(function(msg) {
    var isSent = msg.fromId === currentUser.id;
    messagesHtml += '\
      <div class="message ' + (isSent ? 'sent' : 'received') + '">\
        ' + escapeHtml(msg.content) + '\
        <span class="message-time">' + formatTime(msg.createdAt) + '</span>\
      </div>\
    ';
  });

  container.innerHTML = messagesHtml || '<div class="empty-state"><h3>No messages yet</h3><p>Start the conversation!</p></div>';
  container.scrollTop = container.scrollHeight;
}

function sendMessage(content) {
  if (!currentChatUser || !content.trim()) return;

  var messages = getData('nexus_messages');
  messages.push({
    id: generateId('msg'),
    fromId: currentUser.id,
    toId: currentChatUser,
    content: content.trim(),
    createdAt: Date.now(),
    read: false
  });
  setData('nexus_messages', messages);

  // Create notification
  createNotification('message', currentUser.id, currentChatUser, null, content);

  renderMessages(currentChatUser);
  document.getElementById('messageInput').value = '';
}

// ============================================
// NOTIFICATIONS
// ============================================

function createNotification(type, fromId, toId, postId, content) {
  var notifications = getData('nexus_notifications');
  notifications.push({
    id: generateId('notif'),
    type: type,
    fromId: fromId,
    toId: toId,
    postId: postId,
    content: content || '',
    createdAt: Date.now(),
    read: false
  });
  setData('nexus_notifications', notifications);
  updateNotificationBadge();
}

function updateNotificationBadge() {
  var notifications = getData('nexus_notifications');
  var unreadCount = notifications.filter(function(n) {
    return n.toId === currentUser.id && !n.read;
  }).length;
  
  var badge = document.getElementById('notifBadge');
  if (unreadCount > 0) {
    badge.textContent = unreadCount > 99 ? '99+' : unreadCount;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

function updateNavAvatar() {
  var avatar = document.getElementById('navAvatar');
  if (currentUser && currentUser.profilePic) {
    avatar.src = currentUser.profilePic;
  } else {
    var initial = currentUser ? getInitials(currentUser.username) : '?';
    avatar.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><rect fill="%232dd4bf" width="36" height="36" rx="18"/><text x="50%" y="50%" text-anchor="middle" dy="0.35em" fill="white" font-family="sans-serif" font-weight="600">' + initial + '</text></svg>';
  }
}

// ============================================
// MODAL HANDLERS
// ============================================

function openEditProfileModal() {
  var modal = document.getElementById('editProfileModal');
  var avatar = document.getElementById('editAvatar');
  var username = document.getElementById('editUsername');
  var bio = document.getElementById('editBio');

  if (currentUser.profilePic) {
    avatar.src = currentUser.profilePic;
  } else {
    avatar.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="%232dd4bf" width="100" height="100" rx="50"/><text x="50%" y="50%" text-anchor="middle" dy="0.35em" fill="white" font-family="sans-serif" font-size="2rem" font-weight="600">' + getInitials(currentUser.username) + '</text></svg>';
  }
  
  username.value = currentUser.username;
  bio.value = currentUser.bio || '';
  modal.classList.add('active');

  // Handle avatar upload
  var avatarInput = document.getElementById('editAvatarInput');
  avatarInput.onchange = function(e) {
    var file = e.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        avatar.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
}

function closeEditModal() {
  document.getElementById('editProfileModal').classList.remove('active');
}

function saveProfile() {
  var username = document.getElementById('editUsername').value.trim();
  var bio = document.getElementById('editBio').value.trim();
  var avatar = document.getElementById('editAvatar').src;

  if (!username) {
    showToast('Username is required', 'error');
    return;
  }

  var users = getData('nexus_users');
  var userIndex = users.findIndex(function(u) { return u.id === currentUser.id; });
  
  if (userIndex > -1) {
    // Check if username is taken by another user
    var existingUser = users.find(function(u) { return u.username === username && u.id !== currentUser.id; });
    if (existingUser) {
      showToast('Username already taken', 'error');
      return;
    }

    users[userIndex].username = username;
    users[userIndex].bio = bio;
    if (avatar && avatar.indexOf('data:image/svg+xml') === -1) {
      users[userIndex].profilePic = avatar;
    }
    
    setData('nexus_users', users);
    currentUser = users[userIndex];
    localStorage.setItem('nexus_session', JSON.stringify(currentUser));
    
    showToast('Profile updated!', 'success');
    closeEditModal();
    updateNavAvatar();
    renderProfilePage();
  }
}

// ============================================
// THEME TOGGLE
// ============================================

function toggleTheme() {
  var body = document.body;
  var sunIcon = document.querySelector('.sun-icon');
  var moonIcon = document.querySelector('.moon-icon');
  
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
    localStorage.setItem('nexus_theme', 'dark');
  } else {
    body.classList.add('light-mode');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
    localStorage.setItem('nexus_theme', 'light');
  }
}

function loadTheme() {
  var theme = localStorage.getItem('nexus_theme');
  var sunIcon = document.querySelector('.sun-icon');
  var moonIcon = document.querySelector('.moon-icon');
  
  if (theme === 'light') {
    document.body.classList.add('light-mode');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }
}

// ============================================
// EVENT LISTENERS
// ============================================

window.addEventListener('DOMContentLoaded', function() {
  loadTheme();
  handleRoute();

  // Routing
  window.addEventListener('hashchange', handleRoute);
  
  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // Logout
  document.getElementById('logoutBtn').addEventListener('click', logout);

  // Notification button
  document.getElementById('notifBtn').addEventListener('click', function() {
    navigateTo('notifications');
  });

  // Navigation clicks
  document.getElementById('navLogo').addEventListener('click', function() {
    if (checkAuth()) {
      navigateTo('feed');
    } else {
      navigateTo('login');
    }
  });

  document.getElementById('navFeed').addEventListener('click', function() { navigateTo('feed'); });
  document.getElementById('navExplore').addEventListener('click', function() { navigateTo('explore'); });
  document.getElementById('navChat').addEventListener('click', function() { navigateTo('chat'); });
  document.getElementById('navNotifications').addEventListener('click', function() { navigateTo('notifications'); });
  
  document.getElementById('navProfileLink').addEventListener('click', function() {
    navigateTo('profile');
  });

  // Mobile navigation
  document.getElementById('mobileFeed').addEventListener('click', function() { navigateTo('feed'); });
  document.getElementById('mobileExplore').addEventListener('click', function() { navigateTo('explore'); });
  document.getElementById('mobileChat').addEventListener('click', function() { navigateTo('chat'); });
  document.getElementById('mobileNotifications').addEventListener('click', function() { navigateTo('notifications'); });
  document.getElementById('mobileProfile').addEventListener('click', function() { navigateTo('profile'); });

  // Comments modal
  document.getElementById('closeCommentsModal').addEventListener('click', closeCommentsModal);
  document.getElementById('commentsModal').addEventListener('click', function(e) {
    if (e.target === this) closeCommentsModal();
  });
  document.getElementById('submitComment').addEventListener('click', function() {
    var input = document.getElementById('commentInput');
    addComment(input.value);
    input.value = '';
  });
  document.getElementById('commentInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addComment(this.value);
      this.value = '';
    }
  });

  // Edit profile modal
  document.getElementById('closeEditModal').addEventListener('click', closeEditModal);
  document.getElementById('editProfileModal').addEventListener('click', function(e) {
    if (e.target === this) closeEditModal();
  });
  document.getElementById('saveProfileBtn').addEventListener('click', saveProfile);

  // Story modal
  document.getElementById('storyClose').addEventListener('click', closeStory);
  document.getElementById('storyModal').addEventListener('click', function(e) {
    if (e.target === this) closeStory();
  });

  // Chat message
  document.getElementById('sendMessageBtn').addEventListener('click', function() {
    var input = document.getElementById('messageInput');
    sendMessage(input.value);
  });
  document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage(this.value);
    }
  });

  // Handle resize for mobile nav
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      if (checkAuth()) {
        document.getElementById('mobileNav').style.display = 'none';
      }
    } else if (checkAuth()) {
      document.getElementById('mobileNav').style.display = 'flex';
    }
  });
});
