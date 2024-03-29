import { DisplayAnimationHandler } from '@animation/Display';
import { DisplayConfig, LightboxConfig } from '@/types/Config';
import { GVModule } from '@components/GVModule';

import defaults from '@config/defaults';

export default class GVDisplay extends GVModule<'img', 'base'> {
    public animation: DisplayAnimationHandler;
    public config = {} as DisplayConfig;

    constructor(config: LightboxConfig['display']) {
        super('display', 'img', 'base');
        this.element.classList.add('gv__display');
        this.element.setAttribute('alt', 'Gullview display');

        this.config = { ...defaults.display, ...config };

        this.animation = new DisplayAnimationHandler(
            this.element,
            this.config.animation
        );
    }
}
