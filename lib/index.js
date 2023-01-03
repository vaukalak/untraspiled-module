const firstZeroIndex = function () {
  return this.findIndex(e => e === 0)
}

module.exports = (arr) => arr::firstZeroIndex();
