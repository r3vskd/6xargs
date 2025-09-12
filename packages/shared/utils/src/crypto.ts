import crypto from 'crypto';
import * as CryptoJS from 'crypto-js';

// Encryption/Decryption utilities
export const encrypt = (text: string, key: string): string => {
  const encrypted = CryptoJS.AES.encrypt(text, key).toString();
  return encrypted;
};

export const decrypt = (encryptedText: string, key: string): string => {
  const decrypted = CryptoJS.AES.decrypt(encryptedText, key);
  return decrypted.toString(CryptoJS.enc.Utf8);
};

// Advanced encryption with IV
export const encryptWithIV = (text: string, key: string): {
  encrypted: string;
  iv: string;
} => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipher('aes-256-cbc', key);
  cipher.setAutoPadding(true);
  
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  return {
    encrypted,
    iv: iv.toString('hex')
  };
};

export const decryptWithIV = (
  encryptedText: string,
  key: string,
  iv: string
): string => {
  const decipher = crypto.createDecipher('aes-256-cbc', key);
  decipher.setAutoPadding(true);
  
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
};

// Hashing utilities
export const hash = (data: string, algorithm: string = 'sha256'): string => {
  return crypto.createHash(algorithm).update(data).digest('hex');
};

export const hashWithSalt = (
  data: string,
  salt?: string,
  algorithm: string = 'sha256'
): {
  hash: string;
  salt: string;
} => {
  const actualSalt = salt || crypto.randomBytes(32).toString('hex');
  const hashedData = crypto
    .createHash(algorithm)
    .update(data + actualSalt)
    .digest('hex');
  
  return {
    hash: hashedData,
    salt: actualSalt
  };
};

export const verifyHash = (
  data: string,
  hash: string,
  salt: string,
  algorithm: string = 'sha256'
): boolean => {
  const hashedData = crypto
    .createHash(algorithm)
    .update(data + salt)
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(hashedData, 'hex'),
    Buffer.from(hash, 'hex')
  );
};

// HMAC utilities
export const createHMAC = (
  data: string,
  secret: string,
  algorithm: string = 'sha256'
): string => {
  return crypto.createHmac(algorithm, secret).update(data).digest('hex');
};

export const verifyHMAC = (
  data: string,
  signature: string,
  secret: string,
  algorithm: string = 'sha256'
): boolean => {
  const expectedSignature = createHMAC(data, secret, algorithm);
  return crypto.timingSafeEqual(
    Buffer.from(signature, 'hex'),
    Buffer.from(expectedSignature, 'hex')
  );
};

// Digital signatures
export const generateKeyPair = (): {
  publicKey: string;
  privateKey: string;
} => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem'
    }
  });
  
  return { publicKey, privateKey };
};

export const signData = (data: string, privateKey: string): string => {
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(data);
  return sign.sign(privateKey, 'hex');
};

export const verifySignature = (
  data: string,
  signature: string,
  publicKey: string
): boolean => {
  const verify = crypto.createVerify('RSA-SHA256');
  verify.update(data);
  return verify.verify(publicKey, signature, 'hex');
};

// Random generation utilities
export const generateRandomBytes = (length: number): string => {
  return crypto.randomBytes(length).toString('hex');
};

export const generateRandomString = (
  length: number,
  charset: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
): string => {
  let result = '';
  const charsetLength = charset.length;
  
  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, charsetLength);
    result += charset[randomIndex];
  }
  
  return result;
};

export const generateSecureToken = (length: number = 32): string => {
  return crypto.randomBytes(length).toString('base64url');
};

export const generateNonce = (): string => {
  return crypto.randomBytes(16).toString('base64');
};

// UUID utilities
export const generateUUID = (): string => {
  return crypto.randomUUID();
};

export const isValidUUID = (uuid: string): boolean => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

// Base64 utilities
export const base64Encode = (data: string): string => {
  return Buffer.from(data, 'utf8').toString('base64');
};

export const base64Decode = (encodedData: string): string => {
  return Buffer.from(encodedData, 'base64').toString('utf8');
};

export const base64UrlEncode = (data: string): string => {
  return Buffer.from(data, 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
};

export const base64UrlDecode = (encodedData: string): string => {
  // Add padding if needed
  let padded = encodedData;
  while (padded.length % 4) {
    padded += '=';
  }
  
  return Buffer.from(
    padded.replace(/-/g, '+').replace(/_/g, '/'),
    'base64'
  ).toString('utf8');
};

// Checksum utilities
export const calculateChecksum = (
  data: string | Buffer,
  algorithm: string = 'md5'
): string => {
  return crypto.createHash(algorithm).update(data).digest('hex');
};

export const verifyChecksum = (
  data: string | Buffer,
  expectedChecksum: string,
  algorithm: string = 'md5'
): boolean => {
  const actualChecksum = calculateChecksum(data, algorithm);
  return actualChecksum === expectedChecksum;
};

// File integrity utilities
export const calculateFileHash = async (
  filePath: string,
  algorithm: string = 'sha256'
): Promise<string> => {
  const fs = await import('fs');
  const stream = fs.createReadStream(filePath);
  const hash = crypto.createHash(algorithm);
  
  return new Promise((resolve, reject) => {
    stream.on('data', (data) => hash.update(data));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', reject);
  });
};

// Password-based key derivation
export const deriveKey = (
  password: string,
  salt: string,
  iterations: number = 100000,
  keyLength: number = 32,
  digest: string = 'sha256'
): string => {
  return crypto.pbkdf2Sync(password, salt, iterations, keyLength, digest).toString('hex');
};

export const deriveKeyAsync = async (
  password: string,
  salt: string,
  iterations: number = 100000,
  keyLength: number = 32,
  digest: string = 'sha256'
): Promise<string> => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, iterations, keyLength, digest, (err, derivedKey) => {
      if (err) reject(err);
      else resolve(derivedKey.toString('hex'));
    });
  });
};

// Secure comparison
export const secureCompare = (a: string, b: string): boolean => {
  if (a.length !== b.length) return false;
  
  return crypto.timingSafeEqual(
    Buffer.from(a, 'utf8'),
    Buffer.from(b, 'utf8')
  );
};

// Encryption for sensitive data storage
export class DataEncryption {
  private key: string;
  
  constructor(key: string) {
    this.key = key;
  }
  
  encrypt(data: any): string {
    const jsonString = JSON.stringify(data);
    return encrypt(jsonString, this.key);
  }
  
  decrypt<T = any>(encryptedData: string): T {
    const decryptedString = decrypt(encryptedData, this.key);
    return JSON.parse(decryptedString);
  }
  
  encryptField(obj: Record<string, any>, field: string): Record<string, any> {
    if (obj[field] !== undefined) {
      return {
        ...obj,
        [field]: this.encrypt(obj[field])
      };
    }
    return obj;
  }
  
  decryptField<T = any>(obj: Record<string, any>, field: string): Record<string, any> {
    if (obj[field] !== undefined) {
      return {
        ...obj,
        [field]: this.decrypt<T>(obj[field])
      };
    }
    return obj;
  }
}

// Webhook signature verification
export const verifyWebhookSignature = (
  payload: string,
  signature: string,
  secret: string,
  algorithm: string = 'sha256'
): boolean => {
  const expectedSignature = `${algorithm}=${createHMAC(payload, secret, algorithm)}`;
  return secureCompare(signature, expectedSignature);
};

// Generate webhook signature
export const generateWebhookSignature = (
  payload: string,
  secret: string,
  algorithm: string = 'sha256'
): string => {
  return `${algorithm}=${createHMAC(payload, secret, algorithm)}`;
};

// Mask sensitive data
export const maskSensitiveData = (
  data: string,
  visibleChars: number = 4,
  maskChar: string = '*'
): string => {
  if (data.length <= visibleChars * 2) {
    return maskChar.repeat(data.length);
  }
  
  const start = data.substring(0, visibleChars);
  const end = data.substring(data.length - visibleChars);
  const middle = maskChar.repeat(data.length - visibleChars * 2);
  
  return start + middle + end;
};

// Generate API key with prefix and checksum
export const generateAPIKeyWithChecksum = (prefix: string = 'sk'): string => {
  const randomPart = generateRandomString(32);
  const checksum = hash(randomPart).substring(0, 8);
  return `${prefix}_${randomPart}_${checksum}`;
};

export const validateAPIKeyChecksum = (apiKey: string): boolean => {
  const parts = apiKey.split('_');
  if (parts.length !== 3) return false;
  
  const [, randomPart, checksum] = parts;
  const expectedChecksum = hash(randomPart).substring(0, 8);
  
  return secureCompare(checksum, expectedChecksum);
};