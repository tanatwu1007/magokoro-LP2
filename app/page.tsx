"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Heart,
  MapPin,
  Clock,
  Users,
  CircleAlert,
  UserX,
  Package,
  CalendarClock,
  Coins,
  UserCheck,
  Zap,
  Truck,
  Check,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  FileText,
  Building2,
  MapPinned,
  Phone,
  ChevronDown,
} from "lucide-react"

// ============================================
// LINE Icon Component
// ============================================
function LineIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}

// ============================================
// Data
// ============================================
const problems = [
  { icon: CircleAlert, text: "処分費用が高くて困っている" },
  { icon: UserX, text: "男性スタッフだけが家に来るのは不安" },
  { icon: Package, text: "重い家具を自分たちで運び出せない" },
  { icon: CalendarClock, text: "今日・明日中にどうしても片付けたい" },
]

const reasons = [
  {
    icon: Coins,
    number: "01",
    title: "業界最安値に挑戦",
    description: "徹底した「買取」による費用相殺で、トータル金額がお得に！",
    color: "bg-[#FF6B35]/10 text-[#FF6B35]",
  },
  {
    icon: UserCheck,
    number: "02",
    title: "安心の女性スタッフ",
    description: "一人暮らしの女性やご高齢の方も安心の女性スタッフ同行サービス。",
    color: "bg-[#06C755]/10 text-[#06C755]",
  },
  {
    icon: Zap,
    number: "03",
    title: "地域密着のスピード",
    description: "大和市を拠点にしているからこそのフットワーク。最短即日対応！",
    color: "bg-primary/10 text-primary",
  },
]

const pricingPlans = [
  {
    name: "軽トラック",
    subtitle: "まごころパック",
    price: "15,000",
    description: "一人暮らしの方や少量の不用品に最適",
    features: ["1R〜1Kの片付けに", "家電・小型家具など", "作業員1名対応"],
  },
  {
    name: "2tトラック",
    subtitle: "まごころパック",
    price: "50,000",
    description: "ご家族やお引越し後の片付けに",
    features: ["2K〜2LDKの片付けに", "大型家具・家電対応", "作業員2名対応"],
  },
]

const steps = [
  {
    icon: MessageSquare,
    number: "STEP 1",
    title: "お問い合わせ・写真送信",
    description: "LINEまたはお電話でお気軽にご連絡ください。写真を送るだけで概算見積もりが可能です。",
    color: "bg-[#06C755] text-white",
  },
  {
    icon: FileText,
    number: "STEP 2",
    title: "無料お見積り",
    description: "ご自宅に伺い、お荷物を確認した上で正確なお見積りをご提示します。",
    color: "bg-[#FF6B35] text-white",
  },
  {
    icon: Sparkles,
    number: "STEP 3",
    title: "回収・片付け作業",
    description: "回収・片付け作業を行い、買取品はその場で現金買取いたします！",
    color: "bg-primary text-white",
  },
]

const faqs = [
  {
    question: "本当に追加料金はかかりませんか？",
    answer: "はい、お見積り後の追加料金は一切いただきません。お見積り時にご説明した金額以上のご請求はございませんので、ご安心ください。万が一、作業中に追加のお荷物が出てきた場合も、その場でご相談させていただきます。",
  },
  {
    question: "古いものでも買い取ってもらえますか？",
    answer: "はい、古い物でも価値があるものは積極的に買取させていただきます。アンティーク家具、レトロ家電、古い時計やカメラなど、思いがけないものに価値がつくこともございます。まずはお気軽にご相談ください。",
  },
  {
    question: "遺品整理で何から手をつけていいか分かりません…",
    answer: "ご安心ください。遺品整理は精神的にも体力的にも大変なお仕事です。私たちは丁寧にお話を伺いながら、貴重品の仕分け、供養が必要なものの整理、そして不用品の処分まで、すべてサポートいたします。まずはLINEやお電話でお気持ちをお聞かせください。",
  },
  {
    question: "当日や翌日でも対応してもらえますか？",
    answer: "はい、大和市を拠点としているため、神奈川県内であれば最短即日対応が可能です。お急ぎの場合は、まずお電話でご相談ください。できる限りお客様のご都合に合わせて対応いたします。",
  },
  {
    question: "女性一人でも安心して依頼できますか？",
    answer: "もちろんです！女性スタッフの同行サービスがございますので、一人暮らしの女性の方やご高齢の女性の方も安心してご依頼いただけます。ご予約時にその旨をお伝えください。",
  },
]

// ============================================
// Main Page Component
// ============================================
export default function LandingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* ========== Header ========== */}
      <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Heart className="size-6 fill-current" />
            <span className="text-base font-bold leading-tight md:text-lg">
              神奈川まごころ<br className="sm:hidden" />遺品センター
            </span>
          </div>
          <div className="text-right">
            <span className="rounded-full bg-primary-foreground/20 px-3 py-1.5 text-xs font-medium">
              ご相談・お見積り無料
            </span>
          </div>
        </div>
      </header>

      <main>
        {/* ========== Hero Section ========== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background">
          <div className="relative mx-auto mb-4 aspect-[16/10] w-full max-w-lg overflow-hidden rounded-b-3xl shadow-xl">
            <Image
              src="/hero-bg.png"
              alt="神奈川まごころ遺品センターのスタッフ"
              fill
              className="object-cover"
              priority
            />
            <span className="absolute left-4 top-4 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-md md:text-base">
              神奈川県全域対応
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          <div className="container relative mx-auto px-4 text-center">
            <p className="text-base font-bold text-foreground md:text-lg">
              最短30分現場へ<br />
              買取で費用を劇的に安く<br />
              女性スタッフ同行可能
            </p>
          </div>

          <div className="container relative mx-auto px-4 py-8 md:py-12">
            <div className="mb-6 text-center">
              <h1 className="mb-4 text-2xl font-black leading-tight text-foreground md:text-4xl">
                <span className="text-[#FF6B35]">捨てるの、ちょっと待って！</span>
                <br />
                不用品回収・遺品整理は
                <br />
                <span className="text-primary">『買取』</span>で費用を
                <br className="md:hidden" />
                <span className="underline decoration-[#FF6B35] decoration-4 underline-offset-4">劇的に安く！</span>
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="flex items-center justify-center gap-2 rounded-xl bg-card p-4 shadow-md">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="size-5 text-primary" />
                </div>
                <span className="text-sm font-bold text-foreground">神奈川県全域対応</span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-xl bg-card p-4 shadow-md">
                <div className="flex size-10 items-center justify-center rounded-full bg-[#FF6B35]/10">
                  <Clock className="size-5 text-[#FF6B35]" />
                </div>
                <span className="text-sm font-bold text-foreground">
                  大和市から<br className="sm:hidden" />最短30分で急行！
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-xl bg-card p-4 shadow-md">
                <div className="flex size-10 items-center justify-center rounded-full bg-[#06C755]/10">
                  <Users className="size-5 text-[#06C755]" />
                </div>
                <span className="text-sm font-bold text-foreground">
                  女性スタッフ同行OK<br className="sm:hidden" />で安心
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========== Problem Section ========== */}
        <section className="bg-card py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-center text-xl font-bold text-foreground md:text-2xl">
              こんなお悩み、
              <br className="sm:hidden" />
              <span className="text-primary">神奈川まごころ遺品センター</span>が
              <br className="sm:hidden" />
              解決します！
            </h2>

            <div className="grid gap-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-xl border-2 border-primary/20 bg-background p-4 transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <problem.icon className="size-6 text-primary" />
                  </div>
                  <p className="text-base font-medium text-foreground">{problem.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Reason Section ========== */}
        <section className="bg-background py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-xl font-bold text-foreground md:text-2xl">
              <span className="text-primary">選ばれる</span>
              3つの理由
            </h2>

            <div className="grid gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl bg-card p-6 shadow-lg"
                >
                  <div className="absolute right-4 top-4 text-5xl font-black text-primary/10">
                    {reason.number}
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${reason.color}`}>
                      <reason.icon className="size-7" />
                    </div>

                    <div>
                      <h3 className="mb-2 text-lg font-bold text-foreground">{reason.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Pricing Section ========== */}
        <section id="pricing" className="bg-secondary py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-center text-xl font-bold text-foreground md:text-2xl">
              明朗会計！
              <br className="sm:hidden" />
              <span className="text-primary">分かりやすい料金プラン</span>
            </h2>
            <p className="mb-8 text-center text-sm text-muted-foreground">
              ※お荷物の量により最適なプランをご提案いたします
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg border-2 border-primary/20 bg-card shadow-lg"
                >
                  <div className="absolute right-0 top-0 bg-primary px-4 py-1">
                    <span className="text-xs font-bold text-primary-foreground">人気</span>
                  </div>

                  <div className="flex flex-col space-y-1.5 p-6 pb-2">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                        <Truck className="size-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold leading-none tracking-tight text-foreground">
                          {plan.name}
                        </h3>
                        <p className="text-sm font-medium text-primary">{plan.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-black tracking-tight text-orange-500 md:text-6xl">
                        {plan.price}
                      </span>
                      <span className="text-2xl font-bold text-orange-500">円〜</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="p-6 pt-2">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <Check className="size-5 shrink-0 text-[#06C755]" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-orange-400 bg-orange-50 p-4">
              <Sparkles className="size-6 shrink-0 text-orange-500" />
              <p className="text-center text-base font-bold text-orange-600 md:text-lg">
                買取でここからさらに安くなります！
              </p>
              <Sparkles className="size-6 shrink-0 text-orange-500" />
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 rounded-xl bg-card p-4 shadow-md">
              <ShieldCheck className="size-8 text-primary" />
              <p className="text-center text-sm font-bold text-foreground">
                見積もり後の追加料金は<span className="text-orange-500">一切いただきません</span>
              </p>
            </div>
          </div>
        </section>

        {/* ========== Flow Section ========== */}
        <section className="bg-card py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-xl font-bold text-foreground md:text-2xl">
              ご利用の流れ
              <br className="sm:hidden" />
              <span className="text-primary">（簡単3ステップ）</span>
            </h2>

            <div className="relative">
              <div className="absolute left-7 top-12 hidden h-[calc(100%-96px)] w-0.5 bg-border md:block" />

              <div className="grid gap-6">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex gap-4">
                    <div className="relative z-10 flex flex-col items-center">
                      <div className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${step.color} shadow-lg`}>
                        <step.icon className="size-7" />
                      </div>
                    </div>

                    <div className="flex-1 rounded-2xl bg-background p-5 shadow-md">
                      <span className="mb-1 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                        {step.number}
                      </span>
                      <h3 className="mb-2 text-lg font-bold text-foreground">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== FAQ Section ========== */}
        <section className="bg-background py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-xl font-bold text-foreground md:text-2xl">
              <span className="text-primary">よくある</span>ご質問
            </h2>

            <div className="rounded-2xl bg-card p-4 shadow-lg md:p-6">
              <div className="w-full space-y-0">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-border last:border-b-0"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-4 text-left text-base font-bold text-foreground hover:no-underline"
                      onClick={() =>
                        setOpenFaqIndex((prev) => (prev === index ? null : index))
                      }
                      aria-expanded={openFaqIndex === index}
                    >
                      <span className="flex items-start gap-2">
                        <span className="shrink-0 text-primary">Q.</span>
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown
                        className={`size-5 shrink-0 transition-transform duration-200 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-200 ease-out ${
                        openFaqIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-4 text-sm leading-relaxed text-muted-foreground">
                          <div className="flex items-start gap-2 pl-0">
                            <span className="shrink-0 font-bold text-[#FF6B35]">A.</span>
                            <span>{faq.answer}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== Company Section ========== */}
        <section className="bg-secondary py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-xl font-bold text-foreground md:text-2xl">
              <span className="text-primary">会社</span>概要
            </h2>

            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <Building2 className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">神奈川まごころ遺品センター</h3>
                  <p className="text-sm text-muted-foreground">不用品回収・遺品整理・買取サービス</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPinned className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="mb-1 text-sm font-bold text-foreground">拠点</p>
                    <p className="text-sm text-muted-foreground">神奈川県大和市</p>
                  </div>
                </div>

                <div className="rounded-xl bg-primary/5 p-4">
                  <p className="mb-2 text-sm font-bold text-foreground">対応エリア</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    神奈川県全域（大和市、町田市、座間市、綾瀬市、海老名市、横浜市、相模原市など）
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== Floating CTA ========== */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-border bg-card shadow-[0_-4px_24px_rgba(0,0,0,0.2)]">
        <div className="flex h-20">
          <a
            href="#"
            className="flex flex-1 items-center justify-center gap-3 bg-[#06C755] text-white transition-all hover:bg-[#05b04d] active:scale-[0.98] active:bg-[#05b04d]"
            aria-label="LINEで写真見積もり"
          >
            <LineIcon className="size-9 shrink-0" />
            <span className="text-base font-bold leading-tight">
              LINEで簡単<br />写真見積もり
            </span>
          </a>

          <a
            href="tel:000-000-0000"
            className="flex flex-1 items-center justify-center gap-3 bg-[#FF6B35] text-white transition-all hover:bg-[#e55a28] active:scale-[0.98] active:bg-[#e55a28]"
            aria-label="今すぐ電話する"
          >
            <Phone className="size-9 shrink-0" strokeWidth={2.5} />
            <span className="text-base font-bold leading-tight">
              今すぐ<br />電話する
            </span>
          </a>
        </div>

        <div className="h-[env(safe-area-inset-bottom)] bg-card" />
      </div>
    </div>
  )
}
