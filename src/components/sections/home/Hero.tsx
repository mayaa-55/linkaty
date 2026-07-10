import React from "react";
import Badge from "../../ui/Badge";
import ApplyForm from "../../ui/ApplyForm";
import Tag from "#components/ui/Tag";
import {
  Baby,
  Cake,
  Gem,
  GraduationCap,
  Heart,
  HeartHandshake,
  Rose,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  return (
    <div className="px-5 py-10 space-y-6">
      <div className="space-y-4">
        <Badge>One link. Every celebration.</Badge>
        <h1 className="font-heading my-2! p-0!">
          Turn your big day into{" "}
          <span className="bg-gradient-to-l from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            one beautiful link.
          </span>
        </h1>
        <p className="text-gray-400 my-2! p-0!">
          Linkaty builds a single shareable page for your wedding, birthday, or
          anniversary — RSVPs, countdown, location, and photos, all under one
          link you can text to anyone.
        </p>
      </div>
      <ApplyForm />
      <div className="flex gap-2 overflow-auto hidden-scrollbar">
        <Tag icon={Gem}>Weddings</Tag>
        <Tag icon={HeartHandshake}>Engagements</Tag>
        <Tag icon={Cake}>Birthdays</Tag>
        <Tag icon={Rose}>Anniversaries</Tag>
        <Tag icon={Baby}>Baby showers</Tag>
        <Tag icon={GraduationCap}>Graduations</Tag>
      </div>
      <div className="grid grid-cols-3 divide-x divide-gray-200">
        <div className="flex flex-col items-center justify-center py-3 px-1">
          <h2 className="font-heading my-0! py-0!">430+</h2>
          <p className="my-0! py-0! text-gray-400 text-sm">Links created</p>
        </div>
        <div className="flex flex-col items-center justify-center py-3 px-1">
          <h2 className="font-heading my-0! py-0!">48h</h2>
          <p className="my-0! py-0! text-gray-400 text-sm">Avg. delivery</p>
        </div>
        <div className="flex flex-col items-center justify-center py-3 px-1">
          <h2 className="font-heading my-0! py-0!">4.9★</h2>
          <p className="my-0! py-0! text-gray-400 text-sm">Avg. rating</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
