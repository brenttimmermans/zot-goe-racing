import Link from 'next/link';

const MAILTO_EMAIL = 'info@zotgoe.be';
const MAILTO_SUBJECT = 'Zot goe racing - Contact';
const MAILTO_LINE_BREAK = '%0D%0A';
const MAILTO_BODY = `Hi Zot goe,${MAILTO_LINE_BREAK}${MAILTO_LINE_BREAK}I saw some photos you took on you website and I have a question:`;

const MAILTO_URL = `mailto:${MAILTO_EMAIL}?subject=${MAILTO_SUBJECT}&body=${MAILTO_BODY}`;

export default function ContactLink() {
  return <Link href={MAILTO_URL}>Get in touch</Link>;
}
