package com.contactmanager.exception;

public class ContactValidationException extends RuntimeException {
    public ContactValidationException(String message) {
        super(message);
    }
}
