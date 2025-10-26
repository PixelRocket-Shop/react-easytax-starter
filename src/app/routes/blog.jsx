import PageLayout from '@components/layout/page-layout';
import PlaceholderContent from '@components/ui/placeholder-content';
import CTASection from '@features/home/components/cta-section';

/**
 * Blog page component showcasing blog posts and articles
 */
function BlogPage() {
  return (
    <PageLayout title="Blog - EasyTax">
      <PlaceholderContent />
      <CTASection />
    </PageLayout>
  );
}

export default BlogPage;
