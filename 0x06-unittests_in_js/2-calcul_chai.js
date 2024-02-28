function calculateNumber(type, a, b) {
    switch (type) {
      case 'SUM':
        return Math.round(a) + Math.round(b);
        break;
      case 'SUBTRACT':
        return Math.round(a) - Math.round(b);
        break;
      case 'DIVIDE':
        if (Math.round(b) === 0) {
          return 'Error';
          break;
        }
        return Math.round(a) / Math.round(b);
        break;
      }
      
    }
    
    module.exports = calculateNumber;
    