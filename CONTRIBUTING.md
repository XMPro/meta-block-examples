# Contributing to XMPro Metablocks Examples Repository

This guide will help you contribute new Metablock Examples to this repository. We follow a standard structure and set of best practices to ensure consistency and quality across all Metablocks.

## Table of Contents
- [Getting Started](#getting-started)
- [Metablock Structure](#metablock-structure)
- [Development Guidelines](#development-guidelines)
- [Testing Requirements](#testing-requirements)
- [Documentation Requirements](#documentation-requirements)
- [Pull Request Process](#pull-request-process)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/organization/xmpro-metablocks.git
   ```
2. Create a new branch for your Metablock:
   ```bash
   git checkout -b your-metablock-name
   ```

## Metablock Structure

Your Metablock must follow this directory structure:

```
## Repository Structure

```
src/
└── packages/
    └── example/
        ├── example.xapp (optional)
        ├── README.md
        ├── example.html
        ├── example.js
        ├── example.css
        └── tests/
            ├── test-harness/
            │   ├── test-harness.html
            │   └── server.js
            └── unit-tests/
                └── example-tests.js
```

### Required Files

#### 1. HTML File (`<your-metablock-name>.html`)
- Keep the HTML structure minimal
- Use semantic HTML elements
- Include necessary container elements for your Metablock
- Example:
  ```html
  <div id="main">
      <h1>Your Metablock Name</h1>
      <div id="metablock-container"></div>
  </div>
  ```

#### 2. JavaScript File (`<your-metablock-name>.js`)
- Must implement the `onValueMappingLoaded(data)` function
- Handle initialization state
- Include error handling
- Example structure:
  ```javascript
  function onValueMappingLoaded(data) {
      // Perform your custom logic here
      initializeMetablock(data);
  }

  function initializeMetablock(data) {
      try {
          // Your initialization code
      } catch (error) {
          console.error('Failed to initialize Metablock:', error);
      }
  }
  ```

#### 3. CSS File (`<your-metablock-name>.css`)
- Use specific class names to avoid conflicts
- Follow BEM naming convention
- Example:
  ```css
  .your-metablock-name {
      /* Your styles */
  }

  .your-metablock-name__container {
      /* Container styles */
  }
  ```

#### 4. Test Harness Files
- Modify the provided test harness template
- Include sample data that represents real-world usage
- Example test-harness.html:
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Harness - Your Metablock</title>
      <link rel="stylesheet" href="<your-metablock-name>.css">
  </head>
  <body>
      <div id="main">
          <p id="loading">Loading content...</p>
      </div>
      
      <script src="<your-metablock-name>.js"></script>
      <script>
          // Sample initialization data
          var data = [{
              // Your configuration parameters
          }];
          
          // Load your Metablock
          fetch('<your-metablock-name>.html')
              .then(response => response.text())
              .then(html => {
                  document.getElementById('main').innerHTML = html;
                  onValueMappingLoaded(data);
              })
              .catch(console.error);
      </script>
  </body>
  </html>
  ```

## Development Guidelines

### 1. Configuration Parameters
- Define clear configuration parameters
- Document all parameters in your README.md
- Example:
  ```javascript
  // Configuration parameters
  {
      "api_endpoint": "https://api.example.com",
      "refresh_rate": 5000,
      "debug_mode": false
  }
  ```

### 2. Error Handling
- Implement comprehensive error handling
- Log meaningful error messages
- Provide user feedback when appropriate

### 3. Resource Loading
- Load external resources dynamically
- Include version numbers for external dependencies
- Handle loading failures gracefully

### 4. State Management
- Implement proper initialization checks
- Clean up resources when needed
- Handle updates efficiently

## Testing Requirements

### 1. Test Harness
- Must include a working test harness
- Provide sample data that covers common use cases
- Document any special setup requirements

### 2. Unit Tests
- Write tests for all major functions
- Include edge cases and error conditions
- Maintain test coverage above 80%

## Documentation Requirements

### 1. README.md
Your Metablock must include a README.md with:
- Clear description of functionality
- Installation instructions
- Configuration parameters
- Usage examples
- Troubleshooting guide

### 2. Code Comments
- Add JSDoc comments for functions
- Explain complex logic
- Document any assumptions or limitations

## Pull Request Process

1. Create a new branch for your Metablock
2. Implement your Metablock following the guidelines above
3. Test thoroughly using the test harness
4. Update documentation
5. Submit a pull request with:
   - Description of the Metablock
   - Screenshots/videos if applicable
   - Test results
   - Any special considerations

### Pull Request Checklist

- [ ] Follows directory structure
- [ ] Includes complete README.md
- [ ] Implements required functions
- [ ] Includes test harness
- [ ] Includes unit tests
- [ ] Code is commented
- [ ] Tested in test harness
- [ ] Documentation complete

## Review Process

1. Maintainers will review your PR
2. Address any feedback or requested changes
3. Once approved, your Metablock will be merged

## Need Help?

- Check existing Metablocks for examples
- Create an issue for questions

## Code of Conduct

- Be respectful and professional
- Follow the established patterns
- Help others succeed

Thank you for contributing to the XMPro Metablocks Examples repository!