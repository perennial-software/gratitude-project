import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import GratitudeMessageForm from "@/components/GratitudeMessageForm";

const decorator = () => ({
  template: `<div class="w-full h-screen flex justify-center items-center bg-gray-200"><story/></div>`
});

const gratitudeMessage = {
  beneficiaryName: "",
  recipientName: "",
  recipientEmail: "",
  videoUrl: "",
  callsToAction: [...Array(3)].map(() => ({
    buttonText: "",
    description: "",
    link: ""
  }))
};

storiesOf("Gratitude Message Form", module)
  .addDecorator(decorator)
  .add("Default", () => ({
    components: { GratitudeMessageForm },
    data: () => ({ gratitudeMessage }),
    template: ``
  }));
