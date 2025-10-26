import PageLayout from '@components/layout/page-layout';
import PlaceholderContent from '@components/ui/placeholder-content';
import CTASection from '@features/home/components/cta-section';

/**
 * Login page component - DUMMY AUTH (non-functional)
 */
function LoginPage() {
  return (
    <PageLayout title="Login - EasyTax">
      <PlaceholderContent />
      <CTASection />
    </PageLayout>
  );
}

export default LoginPage;