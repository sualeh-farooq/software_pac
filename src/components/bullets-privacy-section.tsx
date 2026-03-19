
export interface BulletItemData {
  content?: string;
  bulletTitle?: string;
}

export function BulletItem({ item }: { item: BulletItemData }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-[6px] shrink-0">

      </div>
      <p className="  font-normal leading-relaxed">
        <span className="text-heading font-medium text-[20px] md:text-[20px]">{item.bulletTitle}</span>
        <span className="text-subtext text-[18px] md:text-[18px]">{item.content}</span>
      </p>
    </div>
  );
}