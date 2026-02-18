<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nexus - Social Network</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-primary: #0d0d0f;
      --bg-secondary: #161619;
      --bg-tertiary: #1e1e22;
      --fg-primary: #fafafa;
      --fg-secondary: #a1a1aa;
      --fg-muted: #52525b;
      --accent: #ff6b6b;
      --accent-soft: rgba(255, 107, 107, 0.15);
      --accent-glow: rgba(255, 107, 107, 0.4);
      --glass-bg: rgba(30, 30, 34, 0.7);
      --glass-border: rgba(255, 255, 255, 0.08);
      --card-bg: rgba(22, 22, 25, 0.8);
      --success: #4ade80;
      --warning: #fbbf24;
      --error: #f87171;
      --shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      --radius-sm: 8px;
      --radius-md: 12px;
      --radius-lg: 16px;
      --radius-xl: 24px;
    }

    .light-mode {
      --bg-primary: #fafafa;
      --bg-secondary: #ffffff;
      --bg-tertiary: #f4f4f5;
      --fg-primary: #18181b;
      --fg-secondary: #52525b;
      --fg-muted: #a1a1aa;
      --glass-bg: rgba(255, 255, 255, 0.7);
      --glass-border: rgba(0, 0, 0, 0.08);
      --card-bg: rgba(255, 255, 255, 0.9);
      --shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--bg-primary);
      color: var(--fg-primary);
      min-height: 100vh;
      overflow-x: hidden;
      transition: background 0.4s ease, color 0.4s ease;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
    }

    .bg-pattern {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      opacity: 0.4;
      background-image: 
        radial-gradient(ellipse 80% 50% at 20% -20%, var(--accent-glow) 0%, transparent 50%),
        radial-gradient(ellipse 60% 40% at 80% 100%, rgba(139, 92, 246, 0.2) 0%, transparent 50%);
    }

    .light-mode .bg-pattern {
      opacity: 0.3;
    }

    .glass {
      background: var(--glass-bg);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
    }

    .app-container {
      position: relative;
      z-index: 1;
      min-height: 100vh;
    }

    /* Navigation */
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 64px;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 100;
      background: var(--glass-bg);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--glass-border);
    }

    .nav-hidden {
      display: none !important;
    }

    .nav-logo {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--accent);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }

    .nav-logo svg {
      width: 28px;
      height: 28px;
    }

    .nav-center {
      display: flex;
      gap: 8px;
    }

    .nav-link {
      padding: 10px 20px;
      border-radius: var(--radius-md);
      color: var(--fg-secondary);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
      transition: all 0.2s ease;
      position: relative;
      cursor: pointer;
    }

    .nav-link:hover {
      color: var(--fg-primary);
      background: var(--bg-tertiary);
    }

    .nav-link.active {
      color: var(--accent);
      background: var(--accent-soft);
    }

    .nav-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .nav-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--bg-tertiary);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--fg-secondary);
      transition: all 0.2s ease;
      position: relative;
    }

    .nav-btn:hover {
      background: var(--accent-soft);
      color: var(--accent);
      transform: translateY(-2px);
    }

    .nav-btn svg {
      width: 20px;
      height: 20px;
    }

    .notification-badge {
      position: absolute;
      top: -2px;
      right: -2px;
      width: 18px;
      height: 18px;
      background: var(--accent);
      border-radius: 50%;
      font-size: 10px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .profile-avatar-nav {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--accent);
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    .profile-avatar-nav:hover {
      transform: scale(1.05);
    }

    /* Main Content */
    .main-content {
      padding-top: 80px;
      padding-bottom: 100px;
      max-width: 1200px;
      margin: 0 auto;
      padding-left: 24px;
      padding-right: 24px;
    }

    .main-content.no-nav {
      padding-top: 0;
      padding-bottom: 0;
      max-width: none;
    }

    /* Auth Pages */
    .auth-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }

    .auth-card {
      width: 100%;
      max-width: 420px;
      padding: 40px;
    }

    .auth-header {
      text-align: center;
      margin-bottom: 32px;
    }

    .auth-header h1 {
      font-size: 2rem;
      margin-bottom: 8px;
    }

    .auth-header p {
      color: var(--fg-secondary);
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      font-size: 0.9rem;
      color: var(--fg-secondary);
    }

    .form-input {
      width: 100%;
      padding: 14px 16px;
      background: var(--bg-tertiary);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-md);
      color: var(--fg-primary);
      font-size: 1rem;
      font-family: inherit;
      transition: all 0.2s ease;
    }

    .form-input:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 3px var(--accent-soft);
    }

    .form-input::placeholder {
      color: var(--fg-muted);
    }

    .btn {
      padding: 14px 28px;
      border-radius: var(--radius-md);
      font-weight: 600;
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.2s ease;
      border: none;
      font-family: inherit;
    }

    .btn-primary {
      background: var(--accent);
      color: white;
      width: 100%;
    }

    .btn-primary:hover {
      background: #ff5252;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px var(--accent-glow);
    }

    .btn-secondary {
      background: var(--bg-tertiary);
      color: var(--fg-primary);
      border: 1px solid var(--glass-border);
    }

    .btn-secondary:hover {
      background: var(--bg-secondary);
      border-color: var(--accent);
    }

    .auth-footer {
      text-align: center;
      margin-top: 24px;
      color: var(--fg-secondary);
    }

    .auth-footer a {
      color: var(--accent);
      text-decoration: none;
      font-weight: 500;
      cursor: pointer;
    }

    .auth-footer a:hover {
      text-decoration: underline;
    }

    .auth-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 24px;
    }

    .auth-logo svg {
      width: 40px;
      height: 40px;
      color: var(--accent);
    }

    .auth-logo span {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--accent);
    }

    /* Stories Section */
    .stories-container {
      padding: 20px 0;
      margin-bottom: 24px;
      overflow-x: auto;
      scrollbar-width: none;
    }

    .stories-container::-webkit-scrollbar {
      display: none;
    }

    .stories-list {
      display: flex;
      gap: 16px;
      padding: 4px;
    }

    .story-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      flex-shrink: 0;
    }

    .story-ring {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      padding: 3px;
      background: linear-gradient(135deg, var(--accent), #f472b6, #c084fc);
      transition: transform 0.2s ease;
    }

    .story-ring:hover {
      transform: scale(1.05);
    }

    .story-ring.viewed {
      background: var(--fg-muted);
    }

    .story-ring img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid var(--bg-primary);
    }

    .story-item span {
      font-size: 0.75rem;
      color: var(--fg-secondary);
      max-width: 70px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .story-add {
      background: var(--bg-tertiary);
      border: 2px dashed var(--glass-border);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .story-add::after {
      content: '+';
      position: absolute;
      font-size: 1.5rem;
      color: var(--accent);
      font-weight: 600;
    }

    /* Feed Layout */
    .feed-layout {
      display: grid;
      grid-template-columns: 1fr 320px;
      gap: 32px;
    }

    @media (max-width: 1024px) {
      .feed-layout {
        grid-template-columns: 1fr;
      }
      .sidebar {
        display: none;
      }
    }

    /* Post Card */
    .post-card {
      margin-bottom: 24px;
      overflow: hidden;
      animation: slideUp 0.5s ease forwards;
      opacity: 0;
    }

    @keyframes slideUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
      from {
        opacity: 0;
        transform: translateY(20px);
      }
    }

    .post-header {
      padding: 16px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .post-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
    }

    .post-user-info {
      flex: 1;
    }

    .post-username {
      font-weight: 600;
      font-size: 0.95rem;
    }

    .post-time {
      font-size: 0.8rem;
      color: var(--fg-muted);
    }

    .post-menu-btn {
      background: none;
      border: none;
      color: var(--fg-secondary);
      cursor: pointer;
      padding: 8px;
      border-radius: 50%;
      transition: background 0.2s ease;
    }

    .post-menu-btn:hover {
      background: var(--bg-tertiary);
    }

    .post-content {
      padding: 0 20px 16px;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .post-image {
      width: 100%;
      max-height: 500px;
      object-fit: cover;
      border-radius: var(--radius-md);
      margin-bottom: 16px;
    }

    .post-actions {
      padding: 12px 20px;
      display: flex;
      align-items: center;
      gap: 8px;
      border-top: 1px solid var(--glass-border);
    }

    .action-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 10px 16px;
      background: none;
      border: none;
      color: var(--fg-secondary);
      cursor: pointer;
      border-radius: var(--radius-md);
      font-size: 0.9rem;
      font-weight: 500;
      transition: all 0.2s ease;
      font-family: inherit;
    }

    .action-btn:hover {
      background: var(--bg-tertiary);
      color: var(--fg-primary);
    }

    .action-btn.liked {
      color: var(--accent);
    }

    .action-btn.liked svg {
      fill: var(--accent);
    }

    .action-btn svg {
      width: 20px;
      height: 20px;
      transition: transform 0.2s ease;
    }

    .action-btn:hover svg {
      transform: scale(1.1);
    }

    .post-stats {
      padding: 8px 20px;
      font-size: 0.85rem;
      color: var(--fg-secondary);
    }

    .post-stats strong {
      color: var(--fg-primary);
    }

    /* Create Post */
    .create-post {
      padding: 20px;
      margin-bottom: 24px;
    }

    .create-post-header {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
    }

    .create-post textarea {
      width: 100%;
      min-height: 80px;
      background: var(--bg-tertiary);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-md);
      padding: 14px;
      color: var(--fg-primary);
      font-family: inherit;
      font-size: 0.95rem;
      resize: vertical;
      transition: border-color 0.2s ease;
    }

    .create-post textarea:focus {
      outline: none;
      border-color: var(--accent);
    }

    .create-post-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 12px;
    }

    .image-upload-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      background: var(--bg-tertiary);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-md);
      color: var(--fg-secondary);
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.2s ease;
    }

    .image-upload-btn:hover {
      border-color: var(--accent);
      color: var(--accent);
    }

    .image-preview {
      margin-top: 12px;
      position: relative;
      display: inline-block;
    }

    .image-preview img {
      max-width: 200px;
      max-height: 200px;
      object-fit: cover;
      border-radius: var(--radius-md);
    }

    .image-preview .remove-image {
      position: absolute;
      top: -8px;
      right: -8px;
      width: 24px;
      height: 24px;
      background: var(--error);
      border: none;
      border-radius: 50%;
      color: white;
      cursor: pointer;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Sidebar */
    .sidebar {
      position: sticky;
      top: 96px;
    }

    .sidebar-card {
      padding: 20px;
      margin-bottom: 20px;
    }

    .sidebar-title {
      font-size: 0.85rem;
      color: var(--fg-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 16px;
    }

    .suggested-user {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 0;
    }

    .suggested-user img {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
    }

    .suggested-user-info {
      flex: 1;
    }

    .suggested-user-info h4 {
      font-size: 0.9rem;
      font-weight: 600;
    }

    .suggested-user-info p {
      font-size: 0.8rem;
      color: var(--fg-muted);
    }

    .follow-btn {
      padding: 8px 16px;
      background: var(--accent);
      border: none;
      border-radius: var(--radius-sm);
      color: white;
      font-weight: 600;
      font-size: 0.8rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .follow-btn:hover {
      background: #ff5252;
      transform: translateY(-1px);
    }

    .follow-btn.following {
      background: var(--bg-tertiary);
      color: var(--fg-primary);
      border: 1px solid var(--glass-border);
    }

    /* Modal Overlay */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(8px);
      z-index: 200;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }

    .modal-overlay.active {
      opacity: 1;
      visibility: visible;
    }

    .modal-content {
      width: 90%;
      max-width: 500px;
      max-height: 80vh;
      overflow: hidden;
      transform: scale(0.9) translateY(20px);
      transition: transform 0.3s ease;
    }

    .modal-overlay.active .modal-content {
      transform: scale(1) translateY(0);
    }

    .modal-header {
      padding: 20px;
      border-bottom: 1px solid var(--glass-border);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .modal-header h3 {
      font-size: 1.1rem;
    }

    .modal-close {
      background: none;
      border: none;
      color: var(--fg-secondary);
      cursor: pointer;
      padding: 8px;
      border-radius: 50%;
      transition: all 0.2s ease;
    }

    .modal-close:hover {
      background: var(--bg-tertiary);
      color: var(--fg-primary);
    }

    .comments-list {
      max-height: 300px;
      overflow-y: auto;
      padding: 16px;
    }

    .comment-item {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
    }

    .comment-item img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      object-fit: cover;
    }

    .comment-content {
      flex: 1;
      background: var(--bg-tertiary);
      padding: 12px 16px;
      border-radius: var(--radius-md);
    }

    .comment-content h4 {
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 4px;
    }

    .comment-content p {
      font-size: 0.9rem;
      color: var(--fg-secondary);
    }

    .comment-time {
      font-size: 0.75rem;
      color: var(--fg-muted);
      margin-top: 6px;
    }

    .comment-input-area {
      padding: 16px 20px;
      border-top: 1px solid var(--glass-border);
      display: flex;
      gap: 12px;
    }

    .comment-input-area input {
      flex: 1;
      padding: 12px 16px;
      background: var(--bg-tertiary);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-md);
      color: var(--fg-primary);
      font-size: 0.9rem;
      font-family: inherit;
    }

    .comment-input-area input:focus {
      outline: none;
      border-color: var(--accent);
    }

    .comment-input-area button {
      padding: 12px 20px;
      background: var(--accent);
      border: none;
      border-radius: var(--radius-md);
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .comment-input-area button:hover {
      background: #ff5252;
    }

    /* Profile Page */
    .profile-header {
      display: flex;
      gap: 40px;
      padding: 40px 0;
      border-bottom: 1px solid var(--glass-border);
      margin-bottom: 32px;
    }

    @media (max-width: 640px) {
      .profile-header {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 24px;
      }
    }

    .profile-avatar-large {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid var(--accent);
      flex-shrink: 0;
    }

    .profile-info {
      flex: 1;
    }

    .profile-username {
      font-size: 1.75rem;
      margin-bottom: 8px;
    }

    .profile-stats {
      display: flex;
      gap: 32px;
      margin: 20px 0;
    }

    .profile-stat {
      text-align: center;
    }

    .profile-stat strong {
      font-size: 1.25rem;
      display: block;
    }

    .profile-stat span {
      font-size: 0.85rem;
      color: var(--fg-secondary);
    }

    .profile-bio {
      color: var(--fg-secondary);
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .profile-actions {
      display: flex;
      gap: 12px;
    }

    .profile-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    @media (max-width: 640px) {
      .profile-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .profile-grid-item {
      aspect-ratio: 1;
      border-radius: var(--radius-md);
      overflow: hidden;
      cursor: pointer;
      position: relative;
    }

    .profile-grid-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .profile-grid-item:hover img {
      transform: scale(1.05);
    }

    .profile-grid-item .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .profile-grid-item:hover .overlay {
      opacity: 1;
    }

    .overlay-stat {
      display: flex;
      align-items: center;
      gap: 6px;
      color: white;
      font-weight: 600;
    }

    /* Chat Page */
    .chat-container {
      display: grid;
      grid-template-columns: 320px 1fr;
      height: calc(100vh - 160px);
      border-radius: var(--radius-lg);
      overflow: hidden;
    }

    @media (max-width: 768px) {
      .chat-container {
        grid-template-columns: 1fr;
      }
      .chat-list-panel {
        display: none;
      }
      .chat-list-panel.active {
        display: block;
      }
    }

    .chat-list-panel {
      border-right: 1px solid var(--glass-border);
      display: flex;
      flex-direction: column;
    }

    .chat-list-header {
      padding: 20px;
      border-bottom: 1px solid var(--glass-border);
    }

    .chat-list-header h3 {
      font-size: 1.25rem;
    }

    .chat-list {
      flex: 1;
      overflow-y: auto;
    }

    .chat-list-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      cursor: pointer;
      transition: background 0.2s ease;
      border-bottom: 1px solid var(--glass-border);
    }

    .chat-list-item:hover {
      background: var(--bg-tertiary);
    }

    .chat-list-item.active {
      background: var(--accent-soft);
    }

    .chat-list-item img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }

    .chat-list-item-info {
      flex: 1;
      min-width: 0;
    }

    .chat-list-item-info h4 {
      font-size: 0.95rem;
      font-weight: 600;
    }

    .chat-list-item-info p {
      font-size: 0.85rem;
      color: var(--fg-muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .chat-list-item-info .unread {
      color: var(--fg-primary);
      font-weight: 500;
    }

    .unread-badge {
      width: 20px;
      height: 20px;
      background: var(--accent);
      border-radius: 50%;
      font-size: 11px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .chat-panel {
      display: flex;
      flex-direction: column;
    }

    .chat-header {
      padding: 16px 20px;
      border-bottom: 1px solid var(--glass-border);
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .chat-header img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    .chat-header h4 {
      font-size: 1rem;
      font-weight: 600;
    }

    .chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .message {
      max-width: 70%;
      padding: 12px 16px;
      border-radius: var(--radius-lg);
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .message.sent {
      align-self: flex-end;
      background: var(--accent);
      color: white;
      border-bottom-right-radius: 4px;
    }

    .message.received {
      align-self: flex-start;
      background: var(--bg-tertiary);
      border-bottom-left-radius: 4px;
    }

    .message-time {
      font-size: 0.7rem;
      opacity: 0.7;
      margin-top: 4px;
      display: block;
    }

    .chat-input-area {
      padding: 16px 20px;
      border-top: 1px solid var(--glass-border);
      display: flex;
      gap: 12px;
    }

    .chat-input-area input {
      flex: 1;
      padding: 14px 18px;
      background: var(--bg-tertiary);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-xl);
      color: var(--fg-primary);
      font-size: 0.9rem;
      font-family: inherit;
    }

    .chat-input-area input:focus {
      outline: none;
      border-color: var(--accent);
    }

    .chat-input-area button {
      width: 48px;
      height: 48px;
      background: var(--accent);
      border: none;
      border-radius: 50%;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .chat-input-area button:hover {
      background: #ff5252;
      transform: scale(1.05);
    }

    /* Notifications Page */
    .notifications-list {
      max-width: 600px;
      margin: 0 auto;
    }

    .notification-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 20px;
      border-radius: var(--radius-md);
      margin-bottom: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .notification-item:hover {
      background: var(--bg-tertiary);
    }

    .notification-item.unread {
      background: var(--accent-soft);
    }

    .notification-item img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }

    .notification-content {
      flex: 1;
    }

    .notification-content p {
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .notification-content strong {
      font-weight: 600;
    }

    .notification-time {
      font-size: 0.8rem;
      color: var(--fg-muted);
    }

    /* Story Modal */
    .story-modal {
      position: fixed;
      inset: 0;
      z-index: 300;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.95);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }

    .story-modal.active {
      opacity: 1;
      visibility: visible;
    }

    .story-viewer {
      width: 100%;
      max-width: 400px;
      height: 80vh;
      position: relative;
    }

    .story-progress-bar {
      position: absolute;
      top: 16px;
      left: 16px;
      right: 16px;
      height: 3px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 2px;
      overflow: hidden;
    }

    .story-progress {
      height: 100%;
      background: white;
      width: 0;
      transition: width 0.1s linear;
    }

    .story-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: var(--radius-lg);
    }

    .story-header {
      position: absolute;
      top: 32px;
      left: 16px;
      right: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .story-header img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid white;
    }

    .story-header span {
      color: white;
      font-weight: 600;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }

    .story-close {
      position: absolute;
      top: 24px;
      right: 24px;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      padding: 8px;
    }

    /* Edit Profile Form */
    .edit-profile-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .avatar-upload {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .avatar-upload img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid var(--accent);
    }

    /* Empty States */
    .empty-state {
      text-align: center;
      padding: 60px 20px;
    }

    .empty-state svg {
      width: 80px;
      height: 80px;
      color: var(--fg-muted);
      margin-bottom: 20px;
    }

    .empty-state h3 {
      font-size: 1.25rem;
      margin-bottom: 8px;
    }

    .empty-state p {
      color: var(--fg-secondary);
    }

    /* Toast Notifications */
    .toast-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 500;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .toast {
      padding: 16px 24px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      gap: 12px;
      animation: slideInRight 0.3s ease forwards;
      max-width: 350px;
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .toast.success {
      background: var(--success);
      color: #052e16;
    }

    .toast.error {
      background: var(--error);
      color: white;
    }

    .toast.info {
      background: var(--accent);
      color: white;
    }

    /* Mobile Navigation */
    .mobile-nav {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: var(--glass-bg);
      backdrop-filter: blur(20px);
      border-top: 1px solid var(--glass-border);
      padding: 12px 16px;
      z-index: 100;
    }

    @media (max-width: 768px) {
      .mobile-nav {
        display: flex;
        justify-content: space-around;
      }
      .nav-center {
        display: none;
      }
      .nav-right {
        gap: 8px;
      }
    }

    .mobile-nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      color: var(--fg-secondary);
      text-decoration: none;
      font-size: 0.7rem;
      padding: 8px;
      border-radius: var(--radius-sm);
      transition: all 0.2s ease;
      cursor: pointer;
    }

    .mobile-nav-item.active {
      color: var(--accent);
    }

    .mobile-nav-item svg {
      width: 24px;
      height: 24px;
    }

    /* Placeholder avatar */
    .placeholder-avatar {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, var(--accent), #c084fc);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 1.2rem;
      color: white;
    }

    /* Hidden */
    .hidden-input {
      display: none;
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  </style>
</head>
<body>
  <div class="bg-pattern"></div>
  
  <div class="app-container">
    <!-- Navigation -->
    <nav class="nav" id="mainNav">
      <div class="nav-logo" id="navLogo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
        Nexus
      </div>
      
      <div class="nav-center">
        <div class="nav-link" data-page="feed" id="navFeed">Feed</div>
        <div class="nav-link" data-page="explore" id="navExplore">Explore</div>
        <div class="nav-link" data-page="chat" id="navChat">Messages</div>
        <div class="nav-link" data-page="notifications" id="navNotifications">Notifications</div>
      </div>
      
      <div class="nav-right">
        <button class="nav-btn" id="themeToggle" aria-label="Toggle theme">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sun-icon">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="moon-icon" style="display:none">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
        <button class="nav-btn" id="notifBtn" aria-label="Notifications">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span class="notification-badge" id="notifBadge" style="display:none">0</span>
        </button>
        <div id="navProfileLink">
          <img src="" alt="Profile" class="profile-avatar-nav" id="navAvatar">
        </div>
        <button class="nav-btn" id="logoutBtn" aria-label="Logout">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16,17 21,12 16,7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Navigation -->
    <div class="mobile-nav" id="mobileNav">
      <div class="mobile-nav-item" data-page="feed" id="mobileFeed">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
        <span>Feed</span>
      </div>
      <div class="mobile-nav-item" data-page="explore" id="mobileExplore">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
        <span>Explore</span>
      </div>
      <div class="mobile-nav-item" data-page="chat" id="mobileChat">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <span>Messages</span>
      </div>
      <div class="mobile-nav-item" data-page="notifications" id="mobileNotifications">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        <span>Alerts</span>
      </div>
      <div class="mobile-nav-item" data-page="profile" id="mobileProfile">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <span>Profile</span>
      </div>
    </div>

    <!-- Main Content Area -->
    <main class="main-content" id="mainContent">
      <!-- Pages will be rendered here -->
    </main>
  </div>

  <!-- Toast Container -->
  <div class="toast-container" id="toastContainer"></div>

  <!-- Story Modal -->
  <div class="story-modal" id="storyModal">
    <div class="story-viewer">
      <div class="story-progress-bar">
        <div class="story-progress" id="storyProgress"></div>
      </div>
      <img src="" alt="Story" class="story-image" id="storyImage">
      <div class="story-header">
        <img src="" alt="User" id="storyUserAvatar">
        <span id="storyUsername"></span>
      </div>
      <button class="story-close" id="storyClose">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  </div>

  <!-- Comments Modal -->
  <div class="modal-overlay" id="commentsModal">
    <div class="modal-content glass">
      <div class="modal-header">
        <h3>Comments</h3>
        <button class="modal-close" id="closeCommentsModal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <div class="comments-list" id="commentsList"></div>
      <div class="comment-input-area">
        <input type="text" placeholder="Add a comment..." id="commentInput">
        <button id="submitComment">Post</button>
      </div>
    </div>
  </div>

  <!-- Edit Profile Modal -->
  <div class="modal-overlay" id="editProfileModal">
    <div class="modal-content glass">
      <div class="modal-header">
        <h3>Edit Profile</h3>
        <button class="modal-close" id="closeEditModal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <div class="edit-profile-form" style="padding: 20px;">
        <div class="avatar-upload">
          <img src="" alt="Profile" id="editAvatar">
          <label class="image-upload-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21,15 16,10 5,21"/>
            </svg>
            Change Photo
            <input type="file" accept="image/*" class="hidden-input" id="editAvatarInput">
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">Username</label>
          <input type="text" class="form-input" id="editUsername">
        </div>
        <div class="form-group">
          <label class="form-label">Bio</label>
          <textarea class="form-input" id="editBio" rows="3" style="resize: vertical;"></textarea>
        </div>
        <button class="btn btn-primary" id="saveProfileBtn">Save Changes</button>
      </div>
    </div>
  </div>

  <script>
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

        postsHtml += '\
          <article class="post-card glass" style="animation-delay: ' + (index * 0.1) + 's;">\
            <div class="post-header">\
              ' + avatarHtml + '\
              <div class="post-user-info">\
                <span class="post-username">' + user.username + '</span>\
                <span class="post-time">' + formatTime(post.createdAt) + '</span>\
              </div>\
              <button class="post-menu-btn">\
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\
                  <circle cx="12" cy="12" r="1"/>\
                  <circle cx="19" cy="12" r="1"/>\
                  <circle cx="5" cy="12" r="1"/>\
                </svg>\
              </button>\
            </div>\
            <p class="post-content">' + escapeHtml(post.content) + '</p>\
            ' + imageHtml + '\
            <div class="post-stats">\
              <strong>' + (post.likes ? post.likes.length : 0) + '</strong> likes\
            </div>\
            <div class="post-actions">\
              <button class="action-btn ' + (isLiked ? 'liked' : '') + '" data-post-id="' + post.id + '" data-action="like">\
                <svg viewBox="0 0 24 24" fill="' + (isLiked ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="2">\
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>\
                </svg>\
                Like\
              </button>\
              <button class="action-btn" data-post-id="' + post.id + '" data-action="comment">\
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>\
                </svg>\
                Comment\
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
          avatarContainer.innerHTML = '<img src="' + currentUser.profilePic + '" alt="' + currentUser.username + '" style="width:44px;height:44px;border-radius:50%;object-fit:cover;">';
        } else {
          avatarContainer.innerHTML = '<div class="placeholder-avatar" style="width:44px;height:44px;border-radius:50%;">' + getInitials(currentUser.username) + '</div>';
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
      var likeBtns = document.querySelectorAll('[data-action="like"]');
      likeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          var postId = this.dataset.postId;
          toggleLike(postId);
        });
      });

      // Comment buttons
      var commentBtns = document.querySelectorAll('[data-action="comment"]');
      commentBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          var postId = this.dataset.postId;
          openCommentsModal(postId);
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
      var followBtns = document.querySelectorAll('.follow-btn');
      followBtns.forEach(function(btn) {
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
      var storyItems = document.querySelectorAll('.story-item[data-story-id]');
      storyItems.forEach(function(item) {
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
        avatar.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><rect fill="%23ff6b6b" width="36" height="36" rx="18"/><text x="50%" y="50%" text-anchor="middle" dy="0.35em" fill="white" font-family="sans-serif" font-weight="600">' + getInitials(user.username) + '</text></svg>';
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
      var chatItems = document.querySelectorAll('.chat-list-item');
      chatItems.forEach(function(item) {
        item.addEventListener('click', function() {
          var userId = this.dataset.userId;
          openChat(userId);
          
          var allItems = document.querySelectorAll('.chat-list-item');
          allItems.forEach(function(i) { i.classList.remove('active'); });
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
        avatar.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><rect fill="%23ff6b6b" width="36" height="36" rx="18"/><text x="50%" y="50%" text-anchor="middle" dy="0.35em" fill="white" font-family="sans-serif" font-weight="600">' + initial + '</text></svg>';
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
        avatar.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="%23ff6b6b" width="100" height="100" rx="50"/><text x="50%" y="50%" text-anchor="middle" dy="0.35em" fill="white" font-family="sans-serif" font-size="2rem" font-weight="600">' + getInitials(currentUser.username) + '</text></svg>';
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
    
    window.addEventListener('hashchange', handleRoute);
    
    document.addEventListener('DOMContentLoaded', function() {
      loadTheme();
      handleRoute();
    });

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
  </script>
</body>
</html>
