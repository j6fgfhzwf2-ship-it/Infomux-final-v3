import { drawAura } from './animations/aura.js';
import { drawGlow } from './animations/glow.js';
import { drawLiquidGradient } from './animations/liquid-gradient.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

drawLiquidGradient(ctx);
drawAura(ctx);
drawGlow(ctx);

async function testAI() {
    const apiKey = window.electronAPI.getApiKey();
    console.log("API Key ready:", apiKey);
}
testAI();

