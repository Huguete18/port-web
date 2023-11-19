import { Resend } from 'resend';
import { EmailTemplate } from '@/app/components/email-template';
import { NextResponse } from 'next/server';

const resend = new Resend('re_HX3gym51_H1EY29QH9AvKBUw1tQ4Ukr5D');

export async function POST() {
    try {
        const data = resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['serhuguet@protonmail.com'],
            subject: 'Hello from Resend and NextJS',
            react: EmailTemplate({ firstName: 'Sergi'}),
            text: '',
        })
        console.log(data)
    
        return NextResponse.json({message: 'Email Sent'}, {
            status: 200
        })

    } catch (error) {
        return NextResponse.json({message: 'Error'}, {
            status: 500
        })
    }
}
