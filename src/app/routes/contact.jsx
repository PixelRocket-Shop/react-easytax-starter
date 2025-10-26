import PageLayout from '@components/layout/page-layout';
import PlaceholderContent from '@components/ui/placeholder-content';
import CTASection from '@features/home/components/cta-section';

/**
 * Contact page component with contact form and information
 */
function ContactPage() {
  return (
    <PageLayout title="Contact Us - EasyTax">
      <PlaceholderContent />
      <CTASection />
    </PageLayout>
  );
}

export default ContactPage;
