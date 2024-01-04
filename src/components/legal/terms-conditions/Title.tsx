export default function Title({ no, name }: { no: string; name: string }) {
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <h2 className="text-2xl font-bold text-custom_black-900-900 py-8 space-x-4 -mb-4">
          <span>{no}</span>
          <span>{name}</span>
        </h2>
      </div>
    </div>
  );
}
