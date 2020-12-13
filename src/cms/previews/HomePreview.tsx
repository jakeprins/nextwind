import { ComponentType } from 'react';
import HeroSection from 'components/home/HeroSection';
import FeatureSection from 'components/home/FeatureSection';
import StepsSection from 'components/home/StepsSection';
import TeamSection from 'components/home/TeamSection';
import PricingSection from 'components/home/PricingSection';
import BlogSection from 'components/home/BlogSection';

const HomePreview: ComponentType<any> = ({ entry, widgetsFor }) => {
  const features = [];
  widgetsFor('features').map((feature) => {
    features.push({
      name: feature?.getIn(['data', 'name']),
      description: feature?.getIn(['data', 'description']),
    });
  });

  const steps = [];
  widgetsFor('steps').map((step) => {
    steps.push({
      name: step?.getIn(['data', 'name']),
      description: step?.getIn(['data', 'description']),
    });
  });

  const plans = [];
  widgetsFor('plans').map((plan) => {
    plans.push({
      name: plan?.getIn(['data', 'name']),
      description: plan?.getIn(['data', 'description']),
      price: plan?.getIn(['data', 'price']),
      usps: plan?.getIn(['data', 'usps']),
    });
  });

  const slugs = [];
  widgetsFor('posts').map((post) => {
    slugs.push(post?.getIn(['data']));
  });

  const team = [];
  widgetsFor('team').map((member) => {
    team.push({
      name: member?.getIn(['data', 'name']),
      description: member?.getIn(['data', 'description']),
      position: member?.getIn(['data', 'position']),
      image: member?.getIn(['data', 'image']),
    });
  });

  return (
    <>
      <HeroSection
        version={entry.getIn(['data', 'hero_version'])}
        title={entry.getIn(['data', 'hero_title'])}
        description={entry.getIn(['data', 'hero_description'])}
        image={entry.getIn(['data', 'hero_image'])}
      />
      <FeatureSection
        version={entry.getIn(['data', 'feature_version'])}
        title={entry.getIn(['data', 'feature_title'])}
        description={entry.getIn(['data', 'feature_description'])}
        features={features}
      />
      <StepsSection
        version={entry.getIn(['data', 'steps_version'])}
        image={entry.getIn(['data', 'steps_image'])}
        steps={steps}
      />
      <PricingSection
        title={entry.getIn(['data', 'pricing_title'])}
        description={entry.getIn(['data', 'pricing_description'])}
        plans={plans}
      />
      <TeamSection
        version={entry.getIn(['data', 'team_version'])}
        title={entry.getIn(['data', 'team_title'])}
        description={entry.getIn(['data', 'team_description'])}
        team={team}
      />
      <BlogSection
        version={entry.getIn(['data', 'blog_version'])}
        title={entry.getIn(['data', 'blog_title'])}
        description={entry.getIn(['data', 'blog_description'])}
        slugs={slugs}
      />
    </>
  );
};

export default HomePreview;
