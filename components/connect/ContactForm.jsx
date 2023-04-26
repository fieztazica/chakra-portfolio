import { useForm } from 'react-hook-form'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Textarea,
    useToast,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Heading,
} from '@chakra-ui/react'
import fetcher from '../../lib/fetcher'
import { reset } from 'numeral'

function ContactForm() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    const toast = useToast()

    async function onSubmit(values, e) {
        const data = JSON.stringify({
            embeds: [
                {
                    title: values.name,
                    author: {
                        name: values.email,
                    },
                    description: values.message,
                },
            ],
        })

        const res = await fetch('/api/discord/webhooks/contact', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: data,
        })

        if (!res.ok)
            return toast({
                status: 'error',
                isClosable: true,
                title: `${res.statusText}`,
            })

        return toast({
            status: 'success',
            isClosable: true,
            title: `Successfully sent!`,
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
                isInvalid={errors.name || errors.email || errors.message}
            >
                <Card>
                    <CardBody>
                        <FormLabel>Full Name</FormLabel>
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your full name"
                            {...register('name', {
                                required: 'This is required',
                                minLength: {
                                    value: 4,
                                    message: 'Minimum length should be 4',
                                },
                                maxLength: {
                                    value: 256,
                                    message:
                                        'Maximum length should be lower than 256',
                                },
                            })}
                        />
                        <FormErrorMessage>
                            {errors.name && errors.name.message}
                        </FormErrorMessage>

                        <FormLabel>Email</FormLabel>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="your_email@domain.com"
                            {...register('email', {
                                required: 'This is required',
                                minLength: {
                                    value: 4,
                                    message: 'Minimum length should be 4',
                                },
                                maxLength: {
                                    value: 256,
                                    message:
                                        'Maximum length should be lower than 256',
                                },
                            })}
                        />
                        <FormErrorMessage>
                            {errors.email && errors.email.message}
                        </FormErrorMessage>

                        <FormLabel>Message</FormLabel>
                        <Textarea
                            id="message"
                            type="text"
                            name="message"
                            placeholder="Message to send..."
                            {...register('message', {
                                required: 'This is required',
                                minLength: {
                                    value: 4,
                                    message: 'Minimum length should be 4',
                                },
                                maxLength: {
                                    value: 4096,
                                    message:
                                        'Maximum length should be lower than 4096',
                                },
                            })}
                        />
                        <FormErrorMessage>
                            {errors.message && errors.message.message}
                        </FormErrorMessage>
                    </CardBody>
                    <Divider />
                    <CardFooter justifyContent={'end'}>
                        <Button type="submit" isLoading={isSubmitting}>
                            Send
                        </Button>
                    </CardFooter>
                </Card>
            </FormControl>
        </form>
    )
}

export default ContactForm
