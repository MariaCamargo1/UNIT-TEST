const functions = require("./functions.js");

describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
    const a = 1;
    const b = 2;

    //ACT
    const result = functions.multiply(a, b);

    //ASSERT
    expect(result).toEqual(2);

  })
  it('should be return multiple when I sent True and one number', () => {
    //ARRANGE
    const a = true;
    const b = 1;

    //ACT
    const result = functions.multiply(a, b);

    //ASSERT
    expect(result).toEqual(1);

  })
});


describe('isNull function', () => {
  it('should be return null', () => {
    //ARRANGE
    const a = null;
    const b = null;

    //ACT
    const result = functions.isNull(a, b);

    //ASSERT
    expect(result).toBeNull();

  });
});

describe('checkTruthy function', () => {
  it('should be return true when I sent true', () => {
    //ARRANGE
    const a = true;

    //ACT
    const result = functions.checkTruthy(a);

    //ASSERT
    expect(result).toBeTruthy();

  });
})

describe('addLastName function', () => {
  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE
    const lastname = 'Perez';

    //ACT
    const result = functions.addLastName(lastname);

    //ASSERT
    expect(result).toEqual('Pepito Perez');

  });
})




