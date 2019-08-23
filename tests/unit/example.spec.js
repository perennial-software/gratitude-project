import { shallowMount } from "@vue/test-utils";
import GratitudeMessageForm from "@/components/GratitudeMessageForm.vue";

describe("GratitudeMessageForm.vue", () => {
  it("renders props.gratitudeMessage when passed", () => {
    const gratitudeMessage = {
      beneficiaryName: "Alice",
      recipientName: "Bob",
      recipientEmail: "bob@example.com"
    };
    const wrapper = shallowMount(GratitudeMessageForm, {
      propsData: { gratitudeMessage }
    });
    wrapper.vm.$emit("submit");
    expect(wrapper.emitted().submit).toBeTruthy();
  });
});
