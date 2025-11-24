import { Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About EliteHomes
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in finding exceptional properties and creating lasting value in real estate
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At EliteHomes, we're dedicated to transforming the real estate experience. We believe that finding your perfect property should be an exciting journey, not a stressful ordeal. Our team of experienced professionals combines local market expertise with cutting-edge technology to deliver exceptional service and results.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center space-y-4">
            <div className="inline-flex p-4 bg-accent/10 rounded-full">
              <Award className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Excellence</h3>
            <p className="text-muted-foreground">
              We strive for excellence in every interaction and transaction
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="inline-flex p-4 bg-accent/10 rounded-full">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Client First</h3>
            <p className="text-muted-foreground">
              Your needs and goals are at the heart of everything we do
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="inline-flex p-4 bg-accent/10 rounded-full">
              <Target className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Results</h3>
            <p className="text-muted-foreground">
              We're committed to delivering tangible results that exceed expectations
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="inline-flex p-4 bg-accent/10 rounded-full">
              <Heart className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Integrity</h3>
            <p className="text-muted-foreground">
              Honesty and transparency guide every decision we make
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          
          <p>
            Founded in 2024, EliteHomes emerged from a simple vision: to revolutionize the way people buy, sell, and invest in real estate. Our founders recognized that the traditional real estate experience was often fragmented and frustrating, with clients feeling lost in a maze of listings, paperwork, and uncertainty.
          </p>
          
          <p>
            We set out to change that by building a company that puts people first. By combining deep local market knowledge with innovative technology and a genuine commitment to client success, we've helped thousands of individuals and families find their dream properties.
          </p>
          
          <p>
            Today, EliteHomes is proud to be a leading name in real estate, known for our integrity, expertise, and unwavering dedication to client satisfaction. Whether you're buying your first home, selling a property, or building an investment portfolio, we're here to guide you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
