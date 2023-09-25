import { MyTypography } from "@/components/display";
import { MyAlert, MyDialog, MySkeleton } from "@/components/feedback";

export default function FeedbackPage() {
  return (
    <div>
      <h1>Feeback Page</h1>
      <MyAlert />
      <MyDialog />
      <MySkeleton />
      <MyTypography />
    </div>
  );
}
