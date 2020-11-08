import * as R from 'ramda';

const letters = 'abcdefghijklmnopqrstuvwxyz';

export const isLetter = R.includes(R.__, letters);

export default letters;
