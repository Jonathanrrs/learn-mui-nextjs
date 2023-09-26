import {
  MyBasicGrid,
  MyBox,
  MyContainer,
  MyGridResponsive,
  MyGridSpacing,
  MyStack,
} from "@/components/layoutmui";

export default function LayoutPage() {
  return (
    <div>
      <h1>Layout Page</h1>
      <MyBox />
      <MyContainer />
      <MyBasicGrid />
      <MyGridSpacing />
      <MyGridResponsive />
      <MyStack />
    </div>
  );
}
