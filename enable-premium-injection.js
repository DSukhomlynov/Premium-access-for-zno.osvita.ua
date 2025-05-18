try {
    if (typeof window.isPrem === 'function') {
        window.isPrem = () => true;
        console.log('✅Premium included ');
    } else {
        console.warn('window.isPrem is not a function, cannot replace by assignment');
    }
} catch (e) {
    console.error('❌ Failed to replace window.isPrem:', e);
}
