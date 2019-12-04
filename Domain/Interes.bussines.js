const BaseBussines = require('./Base.bussines');

class InteresBussines extends BaseBussines {
  constructor({ InteresRepository }) {
    super(InteresRepository);
  }
}

module.exports = InteresBussines;
