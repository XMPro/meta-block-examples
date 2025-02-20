# XMPro Pump Status Display

## Overview
This package contains a pump status visualization application built for XMPro Application Designer. The application combines switches and a metablock to allow users to toggle three different pumps on and off and visualize their behavior based on the current status.

### Key Features
- Interactive pump control through switches
- Real-time visualization of pump behavior

## Package Contents
| File | Description |
|------|-------------|
| `pump-status-display.xapp` | Main XMPro application package |
| `pump-status-display.html` | Visualization interface template |
| `pump-status-display.css` | Visualization styling definitions |
| `pump-status-display.js` | Pump behavior and visualization functionality |
| `test-harness.html` | Local testing environment |
| `server.js` | Local development server configuration |

## Installation in XMPro Application Designer

### Prerequisites
- Active XMPro Application Designer instance
- Modern web browser
- Active internet connection

### Installation Steps
1. Access XMPro Application Designer
2. Navigate to **Applications** in the left sidebar
3. Click **Import** in the Applications blade
4. In the Import blade:
   - Security Key: `C0mp|ex123`
   - Click **Select a file** and select `pump-status-display.xapp` in your local directory
   - Click **Upload**

## Configuration
Configure the pump status variables in the Value Mapping section of the metablock. The status values are processed through the metablock to determine and display the corresponding pump behavior.

## Local Development and Testing

### Prerequisites
- Node.js (Download from https://nodejs.org/ if not already installed)
- Provided test files (`test-harness.html` and `server.js`)
- Web browser

### Setup Process
1. Open terminal in project directory
2. Install dependencies:
   ```bash
   npm init -y
   npm install express
   ```
3. Create a `public` folder and move all files into it:
   - `test-harness.html`
   - `pump-status-display.html`
   - `pump-status-display.css`
   - `pump-status-display.js`
4. Launch test environment:
   ```bash
   node server.js
   ```
5. Access `http://localhost:3000` in your browser

## Troubleshooting Guide

### Common Issues and Solutions

#### Visualization Not Displaying
- Check your internet connection
- Verify the Value Mapping configuration
- Ensure all required files are properly loaded

#### Switch Status Issues
- Verify switch configurations
- Check Value Mapping connections
- Confirm status values are being properly passed to the metablock

#### Local Testing Issues
- Verify Node.js is properly installed
- Check if port 3000 is available
- Ensure all files are in the `public` folder

### Support
For additional support or questions, please contact your XMPro system administrator or refer to the XMPro documentation.

## License
This application is provided under the terms of your XMPro license agreement.
