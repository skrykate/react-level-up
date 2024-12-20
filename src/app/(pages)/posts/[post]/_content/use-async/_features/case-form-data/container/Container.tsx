'use client';

import { FormEvent, useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';

import { Input } from '@/components/ui-examples/input';
import { Button } from '@/components/ui-examples/button';
import { Label } from '@/components/ui-examples/label';

import {
    Message,
    MessageType,
} from '@/components/ui-typography-examples/message';

import { Loader } from '@/components/ui/loader';

import { useAsync, Status } from '@/hooks/use-async';

import type { FC, ChangeEvent } from 'react';

interface ServerResponse {
    success: boolean;
    message: string;
}

interface IFormData {
    name: string;
    email: string;
}

const submitFormData = async (...args: unknown[]): Promise<ServerResponse> => {
    if (args.length > 0 && typeof args[0] === 'object' && args[0] !== null) {
        const formData = args[0] as IFormData;

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    resolve({
                        success: true,
                        message: 'Form submitted successfully!',
                    });
                } catch (error) {
                    reject(error);
                }
            }, 2000);
        });
    } else {
        throw new Error('Invalid form data');
    }
};

const Container: FC = () => {
    const [formData, setFormData] = useState<IFormData>({
        name: '',
        email: '',
    });

    const { execute, status, value, error } = useAsync<ServerResponse>(
        submitFormData,
        false
    );

    const isEmpty = formData.name === '' || formData.email === '';

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.name.trim() !== '' && formData.email.trim() !== '') {
            execute(formData);
        } else {
            console.error('Name and Email are required');
        }
    };

    return (
        <Layer title="Container">
            <form
                className="flex w-full flex-col items-center justify-center space-y-4"
                onSubmit={handleSubmit}
            >
                <div className="flex w-full flex-col gap-2">
                    <Label>Name</Label>
                    <Input
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        disabled={status === Status.SUCCESS}
                    />
                </div>
                <div className="flex w-full flex-col gap-2">
                    <Label>Email</Label>
                    <Input
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="example@rlu.dev"
                        disabled={status === Status.SUCCESS}
                    />
                </div>
                <Button
                    type="submit"
                    disabled={
                        status === Status.PENDING ||
                        status === Status.SUCCESS ||
                        isEmpty
                    }
                >
                    {status === Status.PENDING
                        ? 'Sending...'
                        : status === Status.SUCCESS
                          ? 'Sent'
                          : 'Send'}
                </Button>
            </form>
            <div className="flex w-full justify-center">
                {status === Status.PENDING ? (
                    <Loader />
                ) : (
                    <>
                        {status === Status.ERROR && error !== null && (
                            <Message type={MessageType.Error}>
                                {error.message}
                            </Message>
                        )}
                        {status === Status.SUCCESS && (
                            <Message type={MessageType.Success}>
                                {value && value.success && value.message}
                            </Message>
                        )}
                    </>
                )}
            </div>
        </Layer>
    );
};

export default Container;
