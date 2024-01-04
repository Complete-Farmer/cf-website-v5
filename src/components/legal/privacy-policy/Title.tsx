export default function Title({ name }: { name: string }) {
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <h2 className="text-2xl font-bold text-custom_black-900-900 py-8">
          {name}
        </h2>
      </div>
    </div>
  );
}
