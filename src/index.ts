import Gullview from './Gullview';
import { LightboxConfig } from './types/Config';

export const build = (config: LightboxConfig) => {
    return Gullview.build(config);
};

// Sandbox
build({
    targetClass: 'gv_src',
    zoom: {
        enabled: true,
        level: 3,
    },
    counter: {
        enabled: true,
        x: 'left',
        y: 'top',
    },
    display: {
        animation: {
            enabled: true,
            duration: 400,
            morph: {
                enabled: true,
                duration: 100,
            },
        },
    },
}).init();
