import { 
  validateTriageRequest,
  validateClientData,
  validateLeadData,
  validatePagination,
  validateDateRange,
  validateApiKey,
  validateUUID
} from '../utils/validation.js';
import { logger } from '../utils/logger.js';

/**
 * Middleware para validar datos de triage request
 */
export const validateTriageData = (req, res, next) => {
  try {
    const validation = validateTriageRequest(req.body);
    
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        error: 'Datos de triage inválidos',
        details: validation.errors
      });
    }
    
    next();
  } catch (error) {
    logger.error('Error en validación de triage:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno de validación'
    });
  }
};

/**
 * Middleware para validar datos de cliente
 */
export const validateClientCreation = (req, res, next) => {
  try {
    const validation = validateClientData(req.body);
    
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        error: 'Datos de cliente inválidos',
        details: validation.errors
      });
    }
    
    next();
  } catch (error) {
    logger.error('Error en validación de cliente:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno de validación'
    });
  }
};

/**
 * Middleware para validar datos de lead
 */
export const validateLeadCreation = (req, res, next) => {
  try {
    const validation = validateLeadData(req.body);
    
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        error: 'Datos de lead inválidos',
        details: validation.errors
      });
    }
    
    next();
  } catch (error) {
    logger.error('Error en validación de lead:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno de validación'
    });
  }
};

/**
 * Middleware para validar parámetros de paginación
 */
export const validatePaginationParams = (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const validation = validatePagination({ page, limit });
    
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        error: 'Parámetros de paginación inválidos'
      });
    }
    
    // Agregar valores validados al request
    req.pagination = {
      page: validation.page,
      limit: validation.limit
    };
    
    next();
  } catch (error) {
    logger.error('Error en validación de paginación:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno de validación'
    });
  }
};

/**
 * Middleware para validar rango de fechas
 */
export const validateDateRangeParams = (req, res, next) => {
  try {
    const { startDate, endDate } = req.query;
    
    if (startDate || endDate) {
      const validation = validateDateRange(startDate, endDate);
      
      if (!validation.isValid) {
        return res.status(400).json({
          success: false,
          error: validation.error
        });
      }
      
      // Agregar fechas validadas al request
      req.dateRange = {
        startDate: validation.startDate,
        endDate: validation.endDate
      };
    }
    
    next();
  } catch (error) {
    logger.error('Error en validación de rango de fechas:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno de validación'
    });
  }
};

/**
 * Middleware para validar UUID en parámetros
 */
export const validateUUIDParam = (paramName = 'id') => {
  return (req, res, next) => {
    try {
      const uuid = req.params[paramName];
      
      if (!validateUUID(uuid)) {
        return res.status(400).json({
          success: false,
          error: `${paramName} debe ser un UUID válido`
        });
      }
      
      next();
    } catch (error) {
      logger.error('Error en validación de UUID:', error);
      res.status(500).json({
        success: false,
        error: 'Error interno de validación'
      });
    }
  };
};

/**
 * Middleware para validar API Key en headers
 */
export const validateApiKeyHeader = (req, res, next) => {
  try {
    const apiKey = req.headers['x-api-key'] || req.headers['authorization']?.replace('Bearer ', '');
    
    if (!apiKey) {
      return res.status(401).json({
        success: false,
        error: 'API Key requerida'
      });
    }
    
    if (!validateApiKey(apiKey)) {
      return res.status(401).json({
        success: false,
        error: 'Formato de API Key inválido'
      });
    }
    
    // Agregar API key al request para uso posterior
    req.apiKey = apiKey;
    next();
  } catch (error) {
    logger.error('Error en validación de API Key:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno de validación'
    });
  }
};

/**
 * Middleware para validar campos requeridos
 */
export const validateRequiredFields = (requiredFields) => {
  return (req, res, next) => {
    try {
      const missingFields = [];
      
      for (const field of requiredFields) {
        if (req.body[field] === undefined || req.body[field] === null || req.body[field] === '') {
          missingFields.push(field);
        }
      }
      
      if (missingFields.length > 0) {
        return res.status(400).json({
          success: false,
          error: 'Campos requeridos faltantes',
          details: {
            missing_fields: missingFields
          }
        });
      }
      
      next();
    } catch (error) {
      logger.error('Error en validación de campos requeridos:', error);
      res.status(500).json({
        success: false,
        error: 'Error interno de validación'
      });
    }
  };
};

/**
 * Middleware para validar tipos de datos
 */
export const validateDataTypes = (fieldTypes) => {
  return (req, res, next) => {
    try {
      const typeErrors = [];
      
      for (const [field, expectedType] of Object.entries(fieldTypes)) {
        const value = req.body[field];
        
        if (value !== undefined && value !== null) {
          const actualType = typeof value;
          
          if (expectedType === 'array' && !Array.isArray(value)) {
            typeErrors.push(`${field} debe ser un array`);
          } else if (expectedType !== 'array' && actualType !== expectedType) {
            typeErrors.push(`${field} debe ser de tipo ${expectedType}`);
          }
        }
      }
      
      if (typeErrors.length > 0) {
        return res.status(400).json({
          success: false,
          error: 'Tipos de datos inválidos',
          details: typeErrors
        });
      }
      
      next();
    } catch (error) {
      logger.error('Error en validación de tipos:', error);
      res.status(500).json({
        success: false,
        error: 'Error interno de validación'
      });
    }
  };
};

/**
 * Middleware para validar límites de longitud de strings
 */
export const validateStringLengths = (fieldLimits) => {
  return (req, res, next) => {
    try {
      const lengthErrors = [];
      
      for (const [field, limits] of Object.entries(fieldLimits)) {
        const value = req.body[field];
        
        if (value && typeof value === 'string') {
          const { min = 0, max = Infinity } = limits;
          
          if (value.length < min) {
            lengthErrors.push(`${field} debe tener al menos ${min} caracteres`);
          }
          
          if (value.length > max) {
            lengthErrors.push(`${field} debe tener máximo ${max} caracteres`);
          }
        }
      }
      
      if (lengthErrors.length > 0) {
        return res.status(400).json({
          success: false,
          error: 'Longitudes de campo inválidas',
          details: lengthErrors
        });
      }
      
      next();
    } catch (error) {
      logger.error('Error en validación de longitudes:', error);
      res.status(500).json({
        success: false,
        error: 'Error interno de validación'
      });
    }
  };
};

/**
 * Middleware para sanitizar datos de entrada
 */
export const sanitizeInput = (req, res, next) => {
  try {
    // Sanitizar strings en el body
    if (req.body && typeof req.body === 'object') {
      for (const [key, value] of Object.entries(req.body)) {
        if (typeof value === 'string') {
          req.body[key] = value.trim();
        }
      }
    }
    
    // Sanitizar query parameters
    if (req.query && typeof req.query === 'object') {
      for (const [key, value] of Object.entries(req.query)) {
        if (typeof value === 'string') {
          req.query[key] = value.trim();
        }
      }
    }
    
    next();
  } catch (error) {
    logger.error('Error en sanitización:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno de sanitización'
    });
  }
};

/**
 * Middleware combinado para validación completa de triage
 */
export const validateTriageComplete = [
  sanitizeInput,
  validateRequiredFields(['target', 'type']),
  validateDataTypes({
    target: 'string',
    type: 'string',
    priority: 'string',
    tags: 'array',
    metadata: 'object'
  }),
  validateStringLengths({
    target: { min: 1, max: 255 },
    type: { min: 1, max: 50 }
  }),
  validateTriageData
];

/**
 * Middleware combinado para validación completa de cliente
 */
export const validateClientComplete = [
  sanitizeInput,
  validateRequiredFields(['email', 'companyName', 'contactName']),
  validateDataTypes({
    email: 'string',
    companyName: 'string',
    contactName: 'string',
    phone: 'string',
    website: 'string',
    companySize: 'string',
    industry: 'string',
    plan: 'string'
  }),
  validateStringLengths({
    email: { min: 5, max: 255 },
    companyName: { min: 2, max: 100 },
    contactName: { min: 2, max: 50 }
  }),
  validateClientCreation
];

/**
 * Middleware combinado para validación completa de lead
 */
export const validateLeadComplete = [
  sanitizeInput,
  validateRequiredFields(['email', 'companyName']),
  validateDataTypes({
    email: 'string',
    companyName: 'string',
    contactName: 'string',
    phone: 'string',
    website: 'string',
    companySize: 'string',
    industry: 'string',
    budget: 'string',
    timeline: 'string',
    useCase: 'string'
  }),
  validateStringLengths({
    email: { min: 5, max: 255 },
    companyName: { min: 2, max: 100 },
    contactName: { min: 2, max: 50 },
    useCase: { max: 500 }
  }),
  validateLeadCreation
];