import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import Button from "./Button";

const ApplyForm = () => {
  return (
    <form
      action="https://formspree.io/f/xpqgokdq"
      method="POST"
      className="space-y-4 bg-gray-50 p-5 rounded-lg border border-gray-300 shadow-box"
    >
      <Input
        label="Full Name"
        type="text"
        name="name"
        placeholder="Your full name"
        required
      />
      <Input
        label="Phone Number"
        type="text"
        name="phone_number"
        placeholder="+20 123 456 7890"
        required
      />
      <Select name="service" label="Which service do you need?" required>
        <option value="" hidden disabled selected>
          Select a service
        </option>
        <optgroup label="Gift websites">
          <option value="wedding_gift">Wedding Gift Website</option>
          <option value="engagement_gift">Engagement Gift Website</option>
          <option value="birthday_gift">Birthday Gift Website</option>
          <option value="anniversary_gift">Anniversary Gift Website</option>
          <option value="graduation_gift">Graduation Gift Website</option>
        </optgroup>
        <optgroup label="Invitations">
          <option value="wedding_invitation">Wedding Invitation</option>
          <option value="engagement_invitation">Engagement Invitation</option>
          <option value="birthday_invitation">Birthday Invitation</option>
          <option value="anniversary_invitation">Anniversary Invitation</option>
          <option value="graduation_invitation">Graduation Invitation</option>
        </optgroup>
        <optgroup label="Other services">
          <option value="website_development">Website Development</option>
          <option value="other">Other</option>
        </optgroup>
      </Select>
      <Input type="date" name="date" label="Event Date" required/>
      <Textarea
        label="Project Details"
        name="details"
        placeholder="Tell us about your special day, vision and requirements..."
      />
      <Button type="submit">
        Submit Request
      </Button>
    </form>
  );
};

export default ApplyForm;
