import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({ 
  title = 'Fjelldata - Personlig IT-konsulent 500kr/t',
  description = 'Personlig IT-rådgivning til rimelig pris - kun 500kr/t. Tilpasselige og pålitelige IT-løsninger uten mellomledd for SMB.',
  image = '/logo.png'
}) => {
  const location = useLocation();
  const baseUrl = 'https://fjelldata.com';
  const url = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    
    // Update Open Graph tags
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', `${baseUrl}${image}`);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url);
    
    // Update Twitter Card tags
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', `${baseUrl}${image}`);
  }, [title, description, image, url]);

  return null;
};

export default MetaTags;
