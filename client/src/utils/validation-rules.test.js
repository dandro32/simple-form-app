import {required, email} from "./validation-rules";
//import React from 'react';


it('should validate correct email', () => {
    const properEmail = "test@test.com"
    expect(email(properEmail)).toBeUndefined();
});

it('should not validate incorrect email', () => {
    const unproperEmails = ["test@test", "test", " ", "@test.com", "test@"];
    unproperEmails.forEach((tooCheck) => {
       expect(email(tooCheck)).toBe('Wrong email format');
    });
});

it('should validate if required', () => {
    expect(required()).toBe("This field is required");
    expect(required('test')).toBeUndefined();
});
