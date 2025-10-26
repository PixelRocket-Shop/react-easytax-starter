import PageLayout from '@components/layout/page-layout';
import PlaceholderContent from '@components/ui/placeholder-content';
import CTASection from '@features/home/components/cta-section';

/**
 * Individual blog post page component
 */
function BlogSinglePage() {
  return (
    <PageLayout title="Blog - EasyTax">
      <PlaceholderContent />
      <CTASection />
    </PageLayout>
  );
}

export default BlogSinglePage;
