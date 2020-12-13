import dynamic from 'next/dynamic';

import config from 'cms/config';
import HomePreview from 'cms/previews/HomePreview';
import PostPreview from 'cms/previews/PostPreview';

const CMS = dynamic(
  (): any =>
    import('netlify-cms-app').then((cms: any) => {
      cms.init({ config });
      cms.registerPreviewStyle(
        'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css'
      );
      cms.registerPreviewStyle(
        'https://unpkg.com/@tailwindcss/typography@0.2.x/dist/typography.min.css'
      );
      cms.registerPreviewTemplate('home', HomePreview);
      cms.registerPreviewTemplate('posts', PostPreview);
    }),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage: React.FC = () => {
  return <CMS />;
};

export default AdminPage;
