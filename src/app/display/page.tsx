import {
  MyAvatar,
  MyAvatarGroup,
  MyBadge,
  MyChip,
  MyNestesList,
  MyTable,
  Mylist,
} from "@/components/display";

export default function DisplayPage() {
  return (
    <div>
      <h1>Data display Page</h1>
      <MyAvatar />
      <MyAvatarGroup />
      <MyBadge />
      <MyChip />
      <Mylist />
      <MyNestesList />
      <MyTable />
    </div>
  );
}
