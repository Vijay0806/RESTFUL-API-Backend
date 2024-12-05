import { postSchema } from '../Utils/validationSchemas.js'; // Adjust the import to use ES Modules

describe('Post Schema Validation', () => {
  test('Validates a valid post object', () => {
    const validPost = { title: 'My Blog Post', content: 'This is content', tags: ['tech'] };
    const { error } = postSchema.validate(validPost);
    expect(error).toBeUndefined(); // Validation should pass
  });

  test('Fails validation for an invalid post object', () => {
    const invalidPost = { title: '', content: 'No title' }; // Missing title
    const { error } = postSchema.validate(invalidPost);
    expect(error).not.toBeUndefined(); // Validation should fail
  });

  test('Fails validation for missing required fields', () => {
    const invalidPost = { tags: ['tech'] }; // Missing title and content
    const { error } = postSchema.validate(invalidPost);
    expect(error).not.toBeUndefined(); // Validation should fail
  });
});
