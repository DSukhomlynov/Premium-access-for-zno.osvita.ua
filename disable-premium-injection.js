try {
    if (typeof window.isPrem === 'function') {
        window.isPrem = () => false;
        console.log('🛑Premium is disabled');
    } else {
        console.warn('window.isPrem is not a function, cannot replace by assignment');
    }
} catch (e) {
    console.error('❌ Failed to replace window.isPrem:', e);
}