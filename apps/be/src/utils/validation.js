/**
 * Email validation utility
 * @param {string} email - Email to validate
 * @returns {boolean} - True if email is valid
 */
export const validateEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Username validation utility
 * @param {string} username - Username to validate
 * @returns {boolean} - True if username is valid
 */
export const validateUsername = (username) => {
  if (!username || typeof username !== 'string') return false;
  
  // Username must be between 3 and 20 characters
  // Can contain letters, numbers, underscores, and hyphens
  const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
  return usernameRegex.test(username);
};

/**
 * Password validation utility
 * @param {string} password - Password to validate
 * @returns {boolean} - True if password is valid
 */
export const validatePassword = (password) => {
  if (!password || typeof password !== 'string') return false;
  
  // Password must be at least 12 characters long
  return password.length >= 12;
};

/**
 * Strong password validation utility
 * @param {string} password - Password to validate
 * @returns {object} - Validation result with details
 */
export const validateStrongPassword = (password) => {
  if (!password || typeof password !== 'string') {
    return {
      isValid: false,
      message: 'Password is required'
    };
  }

  const checks = {
    length: password.length >= 12,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
  };

  const failedChecks = [];
  
  if (!checks.length) failedChecks.push('at least 12 characters');
  if (!checks.uppercase) failedChecks.push('at least one uppercase letter');
  if (!checks.lowercase) failedChecks.push('at least one lowercase letter');
  if (!checks.number) failedChecks.push('at least one number');
  if (!checks.special) failedChecks.push('at least one special character');

  const isValid = Object.values(checks).every(check => check);

  return {
    isValid,
    message: isValid 
      ? 'Password is strong' 
      : `Password must contain: ${failedChecks.join(', ')}`,
    checks
  };
};

/**
 * Company name validation utility
 * @param {string} companyName - Company name to validate
 * @returns {boolean} - True if company name is valid
 */
export const validateCompanyName = (companyName) => {
  if (!companyName || typeof companyName !== 'string') return false;
  
  // Company name must be between 2 and 100 characters
  return companyName.trim().length >= 2 && companyName.trim().length <= 100;
};

/**
 * Name validation utility (for first name, last name)
 * @param {string} name - Name to validate
 * @returns {boolean} - True if name is valid
 */
export const validateName = (name) => {
  if (!name || typeof name !== 'string') return false;
  
  // Name must be between 1 and 50 characters, only letters and spaces
  const nameRegex = /^[a-zA-Z\s]{1,50}$/;
  return nameRegex.test(name.trim());
};

/**
 * URL validation utility
 * @param {string} url - URL to validate
 * @returns {boolean} - True if URL is valid
 */
export const validateUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Sanitize input string
 * @param {string} input - Input to sanitize
 * @returns {string} - Sanitized input
 */
export const sanitizeInput = (input) => {
  if (!input || typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>"'&]/g, (match) => {
      const entities = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;'
      };
      return entities[match];
    });
};

/**
 * API Key validation utility
 * @param {string} apiKey - API key to validate
 * @returns {boolean} - True if API key format is valid
 */
export const validateApiKey = (apiKey) => {
  if (!apiKey || typeof apiKey !== 'string') return false;
  
  // Format: 6x_[env]_[32 chars]
  const apiKeyRegex = /^6x_(test|live)_[a-zA-Z0-9]{32}$/;
  return apiKeyRegex.test(apiKey);
};

/**
 * UUID validation utility
 * @param {string} uuid - UUID to validate
 * @returns {boolean} - True if UUID format is valid
 */
export const validateUUID = (uuid) => {
  if (!uuid || typeof uuid !== 'string') return false;
  
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

/**
 * Pagination validation utility
 * @param {object} params - Pagination parameters
 * @returns {object} - Validation result
 */
export const validatePagination = ({ page, limit }) => {
  const pageNum = parseInt(page) || 1;
  const limitNum = parseInt(limit) || 20;
  
  return {
    isValid: pageNum > 0 && limitNum > 0 && limitNum <= 100,
    page: Math.max(1, pageNum),
    limit: Math.min(100, Math.max(1, limitNum))
  };
};

/**
 * Date range validation utility
 * @param {string} startDate - Start date
 * @param {string} endDate - End date
 * @returns {object} - Validation result
 */
export const validateDateRange = (startDate, endDate) => {
  if (!startDate || !endDate) {
    return { isValid: false, error: 'Both start and end dates are required' };
  }
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return { isValid: false, error: 'Invalid date format' };
  }
  
  if (start > end) {
    return { isValid: false, error: 'Start date must be before end date' };
  }
  
  return { isValid: true, startDate: start, endDate: end };
};

/**
 * Triage request validation utility
 * @param {object} data - Triage request data
 * @returns {object} - Validation result
 */
export const validateTriageRequest = (data) => {
  const errors = [];
  
  if (!data.target || typeof data.target !== 'string' || data.target.trim().length === 0) {
    errors.push('Target is required');
  }
  
  if (!data.type || !['URL', 'DOMAIN', 'IP', 'NETWORK'].includes(data.type)) {
    errors.push('Invalid target type');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Client data validation utility
 * @param {object} data - Client data
 * @returns {object} - Validation result
 */
export const validateClientData = (data) => {
  const errors = [];
  
  if (!validateEmail(data.email)) {
    errors.push('Invalid email format');
  }
  
  if (!validateCompanyName(data.companyName)) {
    errors.push('Invalid company name');
  }
  
  if (!validateName(data.contactName)) {
    errors.push('Invalid contact name');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Lead data validation utility
 * @param {object} data - Lead data
 * @returns {object} - Validation result
 */
export const validateLeadData = (data) => {
  const errors = [];
  
  if (!validateEmail(data.email)) {
    errors.push('Invalid email format');
  }
  
  if (!validateCompanyName(data.companyName)) {
    errors.push('Invalid company name');
  }
  
  return {
     isValid: errors.length === 0,
     errors
   };
 };