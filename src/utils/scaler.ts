export class LotScaler {
    static scale(originalVolume: number, config: any): number {
        switch (config.mode) {
            case 'fixed':
                return config.value;
            case 'coefficient':
                return this.applyCoefficient(originalVolume, config.value, config);
            case 'percentage':
                return this.applyPercentage(originalVolume, config.value, config);
            case 'manual':
                return originalVolume;
            default:
                return originalVolume;
        }
    }

    private static applyCoefficient(volume: number, coefficient: number, config: any): number {
        const scaled = volume * coefficient;
        return this.applyLimits(scaled, config);
    }

    private static applyPercentage(volume: number, percentage: number, config: any): number {
        const scaled = volume * (percentage / 100);
        return this.applyLimits(scaled, config);
    }

    private static applyLimits(volume: number, config: any): number {
        let result = Math.round(volume * 10000) / 10000;
        if (config.minVolume && result < config.minVolume) {
            result = config.minVolume;
        }
        if (config.maxVolume && result > config.maxVolume) {
            result = config.maxVolume;
        }
        return result;
    }
}

export default LotScaler;