import crypto from 'crypto';
import {EnvUtil} from "@/server/common/api/EnvUtil";

export const CreateHmac = (message: string): string => {
    const certId = EnvUtil.CERT_ID;
    if (!certId && typeof window === 'undefined') {
        // handle missing config gracefully during build
        // e.g., skip server-only logic or throw a controlled error with remediation steps
    }
    return crypto
        .createHmac('sha256', message as string)
        .update(certId as string)
        .digest('hex')
        .toUpperCase();
}