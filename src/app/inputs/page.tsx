import {
  ComboBox,
  SelectLoad,
  MyButton,
  MyIconButton,
  MyGroupButton,
  MyCheckbox,
  MyFab,
  MyRadioGroup,
  MyRating,
  MySelect,
  MyMultipleSelect,
  MySwitch,
  MyTextfield,
} from "@/components/inputs";

export default function InputsPage() {
  return (
    <div>
      <h1>Inputs Page</h1>
      <ComboBox />
      <SelectLoad />
      <MyButton />
      <MyIconButton />
      <MyGroupButton />
      <MyCheckbox />
      <MyFab />
      <MyRadioGroup />
      <MyRating />
      <MySelect />
      <MyMultipleSelect />
      <MySwitch />
      <MyTextfield />
    </div>
  );
}
