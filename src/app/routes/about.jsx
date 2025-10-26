import PageLayout from '@components/layout/page-layout';
import PlaceholderContent from '@components/ui/placeholder-content';
import CTASection from '@features/home/components/cta-section';

/**
 * About page component showcasing company information and careers
 */
function AboutPage() {
  return (
    <PageLayout title="About Us - EasyTax">
      <PlaceholderContent />
      <CTASection />
    </PageLayout>
  );
}

export default AboutPage;