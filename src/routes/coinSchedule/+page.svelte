<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import FullCalendar from 'svelte-fullcalendar';

	// @ts-ignore
	import { getCoinColor } from '@/utils/common-util';
	// @ts-ignore
	import { common } from '@/stores/common';
	// @ts-ignore
	import { getCoinSchedule } from '@/apis/coin';

	const fetchResult = createQuery({
		queryKey: ['coinSchedule'],
		queryFn: async () => {
			const options = {
				initialView: 'dayGridMonth',
				plugins: [],
				locale: 'ko',
				headerToolbar: {
					left: 'prev,next today',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay'
				}
			};

			common.setIsLoading(true);

			const results = await getCoinSchedule();

			common.setIsLoading(false);

			options.plugins = [
				// @ts-ignore
				(await import('@fullcalendar/daygrid')).default,
				// @ts-ignore
				(await import('@fullcalendar/timegrid')).default
			];

			let events: any[] = [];

			results.forEach((f: any) => {
				events.push({
					title: f.name,
					start: f.date,
					end: f.date_to,
					classNames: ['text-base-content'],
					url: f.link,
					color: getCoinColor(f.coin)
				});
			});

			// TypeScript 오류를 해결하기 위해 events 속성을 options에 추가하는 코드를 제거합니다.
			// options.events = events;
			return options;
		},
		refetchOnWindowFocus: false
	});
</script>

<div class="mx-auto space-y-2 max-w-7xl text-base-content">
	{#if $fetchResult.isSuccess}
		<FullCalendar options={$fetchResult.data} />
	{/if}
</div>
