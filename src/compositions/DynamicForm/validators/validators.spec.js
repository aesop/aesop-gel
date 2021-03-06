import { getValidationRules } from './validators';
import { FieldTypes } from '../DynamicForm.constants';

describe('DynamicForm field validators', () => {
  describe(`${FieldTypes.TextField} validation rules`, () => {
    const fieldType = FieldTypes.TextField;

    it('should create a validation rule for pattern requirements', () => {
      const schemaRequirements = {
        pattern: {
          value: '1234',
          message: 'must be 1234',
        },
      };
      const expectedReturn = {
        pattern: {
          value: new RegExp(schemaRequirements.pattern.value),
          message: schemaRequirements.pattern.message,
        },
      };

      expect(getValidationRules(schemaRequirements, fieldType)).toEqual(
        expectedReturn,
      );
    });

    it('should assign the maximum length validation object from the schema', () => {
      const schemaRequirements = {
        maxLength: {
          value: 10,
          message: 'must be shorter than 10 characters',
        },
      };

      expect(getValidationRules(schemaRequirements, fieldType)).toEqual({
        maxLength: schemaRequirements.maxLength,
      });
    });
  });

  describe('Generic validation rules', () => {
    it('should create a validation rule for required fields', () => {
      const fieldType = 'Something not in the switch statement keys';
      const schemaRequirements = {
        isRequired: {
          message: 'You must enter a value for this here field see',
        },
      };

      expect(getValidationRules(schemaRequirements, fieldType)).toEqual({
        required: schemaRequirements.isRequired.message,
      });
    });
  });

  it('should not fail when validationObject is undefined', () => {
    expect(getValidationRules(undefined, FieldTypes.TextField)).toStrictEqual(
      {},
    );
  });
});
