# XMPro Chart Display Application

## Overview
This package contains a chart visualization application built for XMPro Application Designer. The application is implemented as a metablock that displays interactive line charts with frequency data, including features like harmonic frequency visualization, zoom capabilities, and dynamic tooltips.

### Key Features
- Interactive line chart visualization
- Harmonic frequency indicators
- Zoom and pan functionality
- Real-time tooltips
- Legend with toggle functionality
- Multiple series support

## Package Contents
| File | Description |
|------|-------------|
| `chart-display.xapp` | Main XMPro application package |
| `chart-display.html` | Chart interface template |
| `chart-display.css` | Chart styling definitions |
| `chart-display.js` | Chart visualization functionality |
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
   - Click **Select a file** and select `chart-display.xapp` in your local directory
   - Click **Upload**

## Configuration
Configure the harmonic frequency value in the Value Mapping section of the metablock. The value is passed to the metablock through the `onValueMappingLoaded()` function and determines the position of the harmonic frequency indicators on the chart.

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
   - `chart-display.html`
   - `chart-display.css`
   - `chart-display.js`
4. Launch test environment:
   ```bash
   node server.js
   ```
5. Access `http://localhost:3000` in your browser

## Troubleshooting Guide

### Common Issues and Solutions

#### Chart Not Displaying
- Check your internet connection
- Verify the data format matches the expected structure
- Ensure all required dependencies are loaded
- Check browser console for JavaScript errors

#### Chart Interaction Issues
- Verify mouse events are working correctly
- Check zoom and pan functionality
- Ensure legend toggles are responding
- Verify tooltip displays on hover

#### Local Testing Issues
- Verify Node.js is properly installed
- Check if port 3000 is available
- Ensure all files are in the `public` folder
- Confirm the test environment has valid sample data

### Support
For additional support or questions, please contact your XMPro system administrator or refer to the XMPro documentation.

## License
This application is provided under the terms of your XMPro license agreement.
