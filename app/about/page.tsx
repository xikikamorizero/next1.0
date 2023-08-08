import { AboutUs } from '@/shared/components';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Next 1.0 | AboutUs',
    description: 'Portfolio website About Us',
  }

export default function About() {
    return (
        <div>
            <AboutUs />
        </div>
    );
}
