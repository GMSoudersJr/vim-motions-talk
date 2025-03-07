const exercises = [
	{
		name: 'ALTERNATE_TOE_TAPS',
		positions: ['FLOOR'],
		muscles: ['ADDUCTORS', 'HIP_FLEXORS'],
		bodyParts: ['LOWER_LEG', 'UPPER_LEG', 'ABDOMINAL'],
		bodySections: ['LEGS', 'HIPS', 'CORE'],
		variations: ['LOW_IMPACT', 'SINGLE_LEGGED', 'STANDING', 'SEATED'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
	},
	{
		name: 'ANKLE_DORSIFLEXIONS',
		positions: ['SEATED', 'SUPINE', 'STANDING'],
		muscles: ['LOWER_LEG'],
		bodyParts: ['ANKLES', 'FEET'],
		bodySections: ['FEET', 'LEGS'],
		variations: ['LOW_IMPACT', 'SINGLE_LEGGED', 'STANDING', 'SEATED', 'ALTERNATING', 'SLOW'],
		demos: ['https://youtu.be/lsWnuKq9CDU?si=D8eLwQpKgoWb8wJg'],
		embeds: ['lsWnuKq9CDU?si=OL-xUBgsbw7IUUGq'],
		categories: ['MOBILITY', 'STABILITY'],
	},
	{
		name: 'ANKLE_EVERSIONS',
		positions: ['SEATED', 'SUPINE', 'STANDING'],
		muscles: ['LOWER_LEG'],
		bodyParts: ['ANKLES', 'FEET'],
		bodySections: ['FEET', 'LEGS'],
		variations: ['LOW_IMPACT', 'SINGLE_LEGGED', 'STANDING', 'SEATED', 'ALTERNATING', 'SLOW'],
		demos: ['https://youtu.be/lsWnuKq9CDU?si=D8eLwQpKgoWb8wJg'],
		embeds: ['lsWnuKq9CDU?si=OL-xUBgsbw7IUUGq'],
		categories: ['MOBILITY', 'STABILITY'],
	},
	{
		name: 'ANKLE_INVERSIONS',
		positions: ['SEATED', 'STANDING', 'SUPINE'],
		muscles: ['SHINS'],
		bodyParts: ['ANKLES', 'FEET'],
		bodySections: ['FEET'],
		variations: ['LOW_IMPACT', 'SINGLE_LEGGED', 'STANDING', 'SEATED', 'ALTERNATING', 'SLOW'],
		demos: ['https://youtu.be/4wVzDjOCPzw?si=1ii_-E3zFZUw3czr'],
		embeds: ['4wVzDjOCPzw?si=VRzsYfLrnjIguu-9'],
		categories: ['MOBILITY', 'STABILITY'],
	},
	{
		name: 'ANKLE_CIRCLES',
		positions: ['SEATED', 'STANDING', 'SUPINE'],
		muscles: ['LOWER_LEG'],
		bodyParts: ['ANKLES', 'FEET', 'LOWER_LEG'],
		bodySections: ['FEET', 'LEGS'],
		variations: ['LOW_IMPACT', 'SINGLE_LEGGED', 'STANDING', 'SEATED', 'ALTERNATING', 'SLOW'],
		demos: ['https://youtu.be/Xi5Ka85TCbI?si=phYMHdl_n-8BDvKg'],
		embeds: ['Xi5Ka85TCbI?si=hQPQDEil1bH1sNDm'],
		categories: ['MOBILITY', 'STABILITY'],
	},
	{
		name: 'ANKLE_ROLLS',
		positions: ['SEATED', 'STANDING', 'SUPINE'],
		muscles: ['LOWER_LEG'],
		bodyParts: ['ANKLES', 'FEET', 'LOWER_LEG'],
		bodySections: ['FEET', 'LEGS'],
		variations: ['LOW_IMPACT', 'SINGLE_LEGGED', 'STANDING', 'SEATED', 'ALTERNATING', 'SLOW'],
		demos: ['https://youtu.be/Xi5Ka85TCbI?si=phYMHdl_n-8BDvKg'],
		embeds: ['Xi5Ka85TCbI?si=hQPQDEil1bH1sNDm'],
		categories: ['MOBILITY', 'STABILITY'],
	},
	{
		name: 'ARCH_LIFTS',
		positions: ['SEATED', 'STANDING', 'SUPINE'],
		muscles: ['LOWER_LEG'],
		bodyParts: ['FEET', 'LOWER_LEG'],
		bodySections: ['FEET', 'LEGS'],
		variations: ['LOW_IMPACT', 'SINGLE_LEGGED', 'STANDING', 'SEATED', 'ALTERNATING', 'SLOW'],
		demos: ['https://youtu.be/B4Ti5rLEwE4?si=HZc5nk7TwEF_JAkp'],
		embeds: ['B4Ti5rLEwE4?si=l-wTwMwIsqXzLIi-'],
		categories: ['MOBILITY', 'STABILITY'],
	},
	{
		name: 'ARM_EXTENSIONS',
		positions: ['SEATED', 'STANDING', 'SUPINE'],
		muscles: ['TRICEPS'],
		bodyParts: ['ARMS'],
		bodySections: ['ARMS'],
		variations: ['LOW_IMPACT', 'STANDING', 'SEATED', 'ALTERNATING', 'SLOW'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS'],
	},
	{
		name: 'ATG_SPLIT_SQUATS',
		positions: ['STANDING'],
		muscles: ['QUADS', 'HAMSTRINGS', 'ADDUCTORS', 'ABDUCTORS', 'CALVES'],
		bodyParts: ['LOWER_LEG', 'UPPER_LEG', 'ANKLES'],
		bodySections: ['LEGS'],
		variations: ['SLOW', 'LOW_IMPACT', 'ON_STAIRS'],
		demos: ['https://barbend.com/atg-split-squat/'],
		embeds: ['Vb4Pn-zsFGc?si=HA6D-jx7NtRN-WAa'],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
	},
	{
		name: 'ATG_SQUATS',
		positions: ['STANDING'],
		muscles: ['QUADS', 'HAMSTRINGS', 'ADDUCTORS', 'ABDUCTORS', 'CALVES'],
		bodyParts: ['LOWER_LEG', 'UPPER_LEG'],
		bodySections: ['LEGS'],
		variations: ['SLOW'],
		demos: ['https://fitnessvolt.com/atg-squat/'],
		embeds: ['E10hHrHV4MQ?si=1NJrtBSsnmcRmpKZ'],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
	},
	{
		name: 'BACK_EXTENSIONS',
		positions: ['PRONE'],
		muscles: ['ERECTOR_SPINAE', 'GLUTES'],
		bodyParts: ['LOWER_BACK', 'UPPER_BACK'],
		bodySections: ['BACK'],
		variations: ['SLOW'],
		demos: ['https://www.youtube.com/watch?v=Bw9YuQTTc58'],
		embeds: ['Bw9YuQTTc58?si=4QW9AgyrAKwdENZ-'],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY', 'YOGA'],
	},
	{
		name: 'BEAR_CRAWLS',
		positions: ['PRONE', 'FLOOR'],
		muscles: ['WHOLE_BODY'],
		bodyParts: ['WHOLE_BODY'],
		bodySections: ['WHOLE_BODY'],
		variations: ['INCLINED', 'DECLINED', 'ON_STAIRS', 'SLOW', 'LOW_IMPACT'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'PRIMAL_MOVEMENTS', 'MOBILITY'],
	},
	{
		name: 'BIRD_DOG_POSES',
		positions: ['PRONE', 'FLOOR'],
		muscles: ['WHOLE_BODY'],
		bodyParts: ['WHOLE_BODY'],
		bodySections: ['WHOLE_BODY'],
		variations: ['ON_KNEES', 'BENT_KNEES'],
		demos: [''],
		embeds: [''],
		categories: ['STABILITY', 'YOGA'],
	},
	{
		name: 'BRIDGES',
		positions: ['SUPINE', 'FLOOR'],
		muscles: ['CORE', 'ERECTOR_SPINAE', 'GLUTES', 'HAMSTRINGS'],
		bodyParts: ['ABDOMINAL', 'LOWER_BACK', 'UPPER_LEG'],
		bodySections: ['BACK', 'CORE', 'LEGS'],
		variations: ['SLOW', 'LOW_IMPACT', 'ON_THE_WALL'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY'],
	},
	{
		name: 'BURPEES',
		positions: ['STANDING', 'PRONE'],
		muscles: ['WHOLE_BODY'],
		bodyParts: ['WHOLE_BODY'],
		bodySections: ['WHOLE_BODY'],
		variations: ['SLOW'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY'],
	},
	{
		name: 'BUTT_KICKS',
		positions: ['STANDING'],
		muscles: ['HAMSTRINGS', 'GLUTES', 'CALVES'],
		bodyParts: ['LOWER_LEG', 'UPPER_LEG', 'HIPS'],
		bodySections: ['LEGS'],
		variations: ['LOW_IMPACT', 'SINGLE_LEGGED'],
		demos: [''],
		embeds: [''],
		categories: ['MOBILITY', 'STABILITY'],
	},
	{
		name: 'CALF_RAISES',
		positions: ['STANDING', 'SEATED'],
		muscles: ['CALVES'],
		bodyParts: ['LOWER_LEG'],
		bodySections: ['LEGS'],
		variations: ['SEATED', 'ON_STAIRS', 'ELEVATED'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
	},
	{
		name: 'CAT_COW_POSES',
		positions: ['STANDING', 'SEATED', 'FLOOR', 'PRONE'],
		muscles: ['CORE', 'ERECTOR_SPINAE'],
		bodyParts: ['LOWER_BACK', 'UPPER_BACK'],
		bodySections: ['BACK', 'CORE'],
		variations: ['STANDING', 'SEATED', 'ON_ALL_FOURS', 'ON_THE_WALL'],
		demos: ['https://www.youtube.com/watch?v=ESJ6Ghvgr6k'],
		embeds: ['ESJ6Ghvgr6k?si=koga2LxoIvTR8P46'],
		categories: ['YOGA', 'MOBILITY'],
	},
	{
		name: 'CRUNCHES',
		positions: ['FLOOR', 'SUPINE'],
		muscles: ['CORE', 'RECTUS_ABDOMINUS'],
		bodyParts: ['ABDOMINAL', 'CORE', 'TORSO'],
		bodySections: ['CORE'],
		variations: ['INCLINED', 'REVERSE'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS'],
	},
	{
		name: 'DIPS',
		positions: ['STANDING'],
		muscles: ['TRICEPS', 'DELTS'],
		bodyParts: ['ARMS', 'SHOULDERS'],
		bodySections: ['ARMS', 'SHOULDERS'],
		variations: ['SLOW', 'BENT_KNEES', 'INVERTED'],
		demos: ['https://www.wikihow.com/Do-Dips'],
		embeds: ['l41SoWZiowI?si=nR7Crq7K7A4jyzJL'],
		categories: ['CALISTHENICS'],
	},
	{
		name: 'DOWNWARD_DOG_POSES',
		positions: ['PRONE', 'FLOOR'],
		muscles: ['CALVES', 'SHOULDER_GIRDLE', 'CORE'],
		bodyParts: ['WHOLE_BODY'],
		bodySections: ['WHOLE_BODY'],
		variations: ['ON_KNEES', 'ON_ALL_FOURS'],
		demos: ['https://www.youtube.com/watch?v=ayQoxw8sRTk'],
		embeds: ['ayQoxw8sRTk?si=worNs5_dza5kTKda'],
		categories: ['YOGA'],
	},
	{
		name: 'FLUTTER_KICKS',
		positions: ['SUPINE'],
		muscles: ['CORE'],
		bodyParts: ['CORE'],
		bodySections: ['CORE'],
		variations: ['SLOW'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'STABILITY'],
	},
	{
		name: 'FORWARD_ARM_CIRCLES',
		positions: ['STANDING', 'KNEELING', 'SEATED'],
		muscles: ['SHOULDER_GIRDLE'],
		bodyParts: ['SHOULDERS'],
		bodySections: ['SHOULDERS'],
		variations: ['REVERSE', 'SLOW', 'CROSSED_ARMS', 'SEATED', 'ON_KNEES'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY'],
	},
	{
		name: 'HIGH_KNEES',
		positions: ['STANDING'],
		muscles: ['WHOLE_BODY'],
		bodyParts: ['WHOLE_BODY'],
		bodySections: ['WHOLE_BODY'],
		variations: ['LOW_IMPACT', 'SLOW', 'SINGLE_LEGGED'],
		demos: [''],
		embeds: [''],
		categories: ['MOBILITY', 'STABILITY'],
	},
	{
		name: 'JUMPING_JACKS',
		positions: ['STANDING'],
		muscles: ['WHOLE_BODY'],
		bodyParts: ['WHOLE_BODY'],
		bodySections: ['WHOLE_BODY'],
		variations: ['LOW_IMPACT', 'SLOW'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY'],
	},
	{
		name: 'KNEE_RAISES',
		positions: ['STANDING', 'SEATED', 'SIDE', 'FLOOR'],
		muscles: ['HIP_FLEXORS', 'CORE', 'ABDUCTORS', 'ADDUCTORS'],
		bodyParts: ['UPPER_LEG', 'CORE'],
		bodySections: ['CORE', 'LEGS'],
		variations: ['ON_ALL_FOURS', 'SLOW', 'SINGLE_LEGGED', 'PIKE'],
		demos: ['https://youtu.be/aK8Rm_tv3WM?si=upFmKOPpjfafmlHE'],
		embeds: ['aK8Rm_tv3WM?si=iq1B2l_SCjPIgcFY'],
		categories: ['MOBILITY', 'STABILITY'],
	},
	{
		name: 'LATERAL_LEG_RAISES',
		positions: ['STANDING', 'SIDE'],
		muscles: ['ABDUCTORS', 'CORE'],
		bodyParts: ['CORE', 'UPPER_LEG'],
		bodySections: ['CORE', 'LEGS'],
		variations: ['SLOW', 'ALTERNATING', 'BENT_KNEES', 'SINGLE_LEGGED'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'STABILITY'],
	},
	{
		name: 'LEG_RAISES',
		positions: ['SUPINE', 'FLOOR'],
		muscles: ['CORE'],
		bodyParts: ['CORE', 'UPPER_LEG'],
		bodySections: ['CORE'],
		variations: ['BENT_KNEES', 'SLOW'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS'],
	},
	{
		name: 'LUNGES',
		positions: ['STANDING'],
		muscles: ['ABDUCTORS', 'ADDUCTORS', 'QUADS', 'HAMSTRINGS', 'CALVES', 'CORE'],
		bodyParts: ['ANKLES', 'FEET', 'LOWER_LEG', 'UPPER_LEG', 'HIPS'],
		bodySections: ['LEGS', 'HIPS', 'FEET'],
		variations: ['REVERSE', 'SLOW'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
	},
	{
		name: 'MOUNTAIN_CLIMBERS',
		positions: ['PRONE'],
		muscles: ['WHOLE_BODY'],
		bodyParts: ['WHOLE_BODY'],
		bodySections: ['WHOLE_BODY'],
		variations: ['LOW_IMPACT', 'SLOW', 'ON_STAIRS', 'ON_THE_WALL', 'ALTERNATING'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS'],
	},
	{
		name: 'NECK_CIRCLES',
		positions: ['STANDING', 'SEATED', 'KNEELING'],
		muscles: ['NECK'],
		bodyParts: ['NECK'],
		bodySections: ['NECK'],
		variations: ['SLOW', 'LOW_IMPACT', 'ALTERNATING', 'STANDING', 'SEATED', 'ON_ALL_FOURS'],
		demos: ['https://youtu.be/gBwGyIp5vdM?si=kvG2iRsg15w6bQT5'],
		embeds: ['gBwGyIp5vdM?si=oZE7XWPmWC7xFd7y'],
		categories: ['YOGA', 'MOBILITY'],
	},
	{
		name: 'NECK_ROLLS',
		positions: ['STANDING', 'SEATED', 'KNEELING'],
		muscles: ['NECK'],
		bodyParts: ['NECK'],
		bodySections: ['NECK'],
		variations: ['SLOW', 'LOW_IMPACT', 'ALTERNATING', 'STANDING', 'SEATED', 'ON_ALL_FOURS'],
		demos: ['https://youtu.be/gBwGyIp5vdM?si=kvG2iRsg15w6bQT5'],
		embeds: ['gBwGyIp5vdM?si=oZE7XWPmWC7xFd7y'],
		categories: ['YOGA', 'MOBILITY'],
	},
	{
		name: 'PLANKS',
		positions: ['PRONE', 'FLOOR'],
		muscles: ['CORE'],
		bodyParts: ['CORE'],
		bodySections: ['CORE'],
		variations: ['ON_KNEES', 'LOW_IMPACT'],
		demos: ['https://youtu.be/DoYPuzccR-M?si=EkZyty5HBKdcuHzw'],
		embeds: ['DoYPuzccR-M?si=Pp9nevDBtLaoLITr'],
		categories: ['CALISTHENICS'],
	},
	{
		name: 'PULL_UPS',
		positions: ['STANDING'],
		muscles: ['BICEPS', 'SHOULDER_GIRDLE', 'FOREARM', 'LATS', 'CORE'],
		bodyParts: ['ARMS', 'UPPER_BACK', 'CORE'],
		bodySections: ['ARMS', 'BACK', 'CORE'],
		variations: ['WIDE_GRIP', 'CLOSE_GRIP', 'LOW_IMPACT', 'SLOW', 'ALTERNATING'],
		demos: ['https://youtu.be/rw58y0KoidM?si=G9GbWQ7oITUO_SDP'],
		embeds: ['rw58y0KoidM?si=f0x2ovtCNGqDPuTg'],
		categories: ['CALISTHENICS'],
	},
	{
		name: 'PUSH_UPS',
		positions: ['FLOOR', 'PRONE'],
		muscles: ['CORE', 'SHOULDER_GIRDLE', 'PECS', 'DELTS'],
		bodyParts: ['ARMS', 'CORE', 'SHOULDERS'],
		bodySections: ['CORE', 'SHOULDERS', 'ARMS'],
		variations: ['ON_KNEES', 'ON_THE_WALL', 'INCLINED', 'DECLINED', 'SLOW', 'LOW_IMPACT'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'STABILITY'],
	},
	{
		name: 'REVERSE_ARM_CIRCLES',
		positions: ['STANDING', 'KNEELING'],
		muscles: ['SHOULDER_GIRDLE'],
		bodyParts: ['SHOULDERS'],
		bodySections: ['SHOULDERS'],
		variations: ['SLOW', 'LOW_IMPACT', 'CROSSED_ARMS', 'ON_KNEES'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS'],
	},
	{
		name: 'REVERSE_FLY',
		positions: ['STANDING', 'KNEELING', 'SEATED'],
		muscles: ['LATS', 'TRAPS', 'ERECTOR_SPINAE', 'SHOULDER_GIRDLE'],
		bodyParts: ['UPPER_BACK', 'SHOULDERS'],
		bodySections: ['BACK', 'SHOULDERS'],
		variations: ['ON_KNEES', 'SEATED', 'LOW_IMPACT'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS'],
	},
	{
		name: 'SCISSOR_KICKS',
		positions: ['FLOOR', 'SUPINE'],
		muscles: ['CORE', 'ABDUCTORS', 'ADDUCTORS'],
		bodyParts: ['CORE'],
		bodySections: ['CORE'],
		variations: ['CROSSED_LEGS', 'BENT_KNEES'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS'],
	},
	{
		name: 'SEATED_CALF_RAISES',
		positions: ['SEATED'],
		muscles: ['CALVES'],
		bodyParts: ['LOWER_LEG'],
		bodySections: ['LEGS'],
		variations: ['STANDING', 'ALTERNATING', 'SINGLE_LEGGED', 'SLOW', 'LOW_IMPACT'],
		demos: ['https://youtu.be/sp0R2tfjEOo?si=qc3uWFXDsMhehTUS'],
		embeds: ['sp0R2tfjEOo?si=ObcEZqC7ExvHn_Zv'],
		categories: ['CALISTHENICS', 'STABILITY'],
	},
	{
		name: 'SHOULDER_TAPS',
		positions: ['STANDING'],
		muscles: ['DELTS', 'TRICEPS'],
		bodyParts: ['SHOULDERS', 'ARMS'],
		bodySections: ['SHOULDERS', 'ARMS'],
		variations: ['ON_KNEES', 'SLOW', 'LOW_IMPACT', 'ALTERNATING'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'STABILITY'],
	},
	{
		name: 'SIDE_PLANKS',
		positions: ['FLOOR', 'SIDE'],
		muscles: ['CORE', 'EXTERNAL_OBLIQUES', 'INTERNAL_OBLIQUES'],
		bodyParts: ['CORE'],
		bodySections: ['CORE'],
		variations: ['ALTERNATING', 'SLOW', 'LOW_IMPACT', 'CROSSED_LEGS'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'STABILITY'],
	},
	{
		name: 'SPEED_SKATERS',
		positions: ['STANDING'],
		muscles: ['GLUTES', 'QUADS', 'HAMSTRINGS', 'CALVES', 'CORE'],
		bodyParts: ['CORE', 'UPPER_LEG', 'LOWER_LEG', 'ANKLES'],
		bodySections: ['CORE', 'LEGS', 'FEET'],
		variations: ['SLOW', 'ALTERNATING', 'SINGLE_LEGGED', 'STANDING'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
	},
	{
		name: 'SQUATS',
		positions: ['STANDING'],
		muscles: ['HAMSTRINGS', 'QUADS'],
		bodyParts: ['UPPER_LEG', 'ANKLES', 'LOWER_LEG'],
		bodySections: ['LEGS', 'FEET'],
		variations: ['SINGLE_LEGGED', 'STANDING', 'SLOW', 'LOW_IMPACT'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
	},
	{
		name: 'SUPERHUMANS',
		positions: ['PRONE'],
		muscles: ['ERECTOR_SPINAE', 'GLUTES', 'DELTS'],
		bodyParts: ['LOWER_BACK', 'UPPER_BACK', 'SHOULDERS'],
		bodySections: ['BACK'],
		variations: ['SLOW', 'LOW_IMPACT', 'ALTERNATING'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS'],
	},
	{
		name: 'TOE_CURLS',
		positions: ['STANDING', 'SEATED', 'SUPINE', 'FLOOR'],
		muscles: ['FLEXORS'],
		bodyParts: ['FEET', 'TOES'],
		bodySections: ['FEET'],
		variations: ['SEATED', 'STANDING', 'SLOW', 'LOW_IMPACT', 'ALTERNATING'],
		demos: ['https://youtu.be/DE3bRURe22I?si=DgjT4DsdVorRMLXf'],
		embeds: ['DE3bRURe22I?si=jDWd3LIBpu333xE0'],
		categories: ['MOBILITY', 'STABILITY'],
	},
	{
		name: 'TOE_RAISES',
		positions: ['STANDING', 'SEATED', 'SUPINE', 'FLOOR'],
		muscles: ['EXTENSORS'],
		bodyParts: ['FEET', 'TOES'],
		bodySections: ['FEET'],
		variations: ['SEATED', 'STANDING', 'SLOW', 'LOW_IMPACT', 'ALTERNATING'],
		demos: ['https://youtu.be/5oi3PoEu4W0?si=TihfSnKEV9ZyaFVJ'],
		embeds: ['5oi3PoEu4W0?si=vG4nW_v6LBfMP5Zp'],
		categories: ['MOBILITY', 'STABILITY'],
	},
	{
		name: 'TOE_SPLAYS',
		positions: ['STANDING', 'SEATED', 'SUPINE', 'FLOOR'],
		muscles: [],
		bodyParts: ['FEET', 'TOES'],
		bodySections: ['FEET'],
		variations: ['SEATED', 'STANDING', 'SLOW', 'LOW_IMPACT', 'ALTERNATING'],
		demos: ['https://youtu.be/GqPf7zppOR4?si=6Z0BZf-lUFPEKdCU'],
		embeds: ['GqPf7zppOR4?si=hB70ZzcrPpCuzQGf'],
		categories: ['MOBILITY', 'STABILITY'],
	},
	{
		name: 'TOE_TOUCHES',
		positions: ['FLOOR', 'SUPINE'],
		muscles: ['CORE'],
		bodyParts: ['ABDOMINAL'],
		bodySections: ['CORE'],
		variations: ['LOW_IMPACT', 'SLOW', 'CROSSED_LEGS'],
		demos: ['https://youtu.be/9iEI95-eZWk?si=CCrVK6oH8tiAWI8r'],
		embeds: ['9iEI95-eZWk?si=64K8GFopUSGluB5x'],
		categories: ['MOBILITY', 'STABILITY', 'YOGA'],
	},
	{
		name: 'UPWARD_DOG_POSES',
		positions: ['FLOOR', 'PRONE'],
		muscles: ['TRICEPS', 'ERECTOR_SPINAE', 'GLUTES'],
		bodyParts: ['ARMS', 'UPPER_BACK', 'LOWER_BACK'],
		bodySections: ['ARMS', 'BACK', 'HIPS'],
		variations: ['SLOW', 'LOW_IMPACT'],
		demos: ['https://www.youtube.com/watch?v=cIX73v498u4'],
		embeds: ['cIX73v498u4?si=2eb2qW27X8xdo9rG'],
		categories: ['YOGA'],
	},
	{
		name: 'TRUNK_TWISTS',
		positions: ['FLOOR', 'SUPINE'],
		muscles: ['CORE', 'EXTERNAL_OBLIQUES', 'INTERNAL_OBLIQUES'],
		bodyParts: ['CORE'],
		bodySections: ['CORE'],
		variations: ['STANDING', 'LOW_IMPACT', 'SLOW', 'ALTERNATING'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
	},
	{
		name: 'WALKOUT_PLANKS',
		positions: ['PRONE'],
		muscles: ['SHOULDER_GIRDLE', 'CORE'],
		bodyParts: ['SHOULDERS', 'CORE'],
		bodySections: ['ARMS', 'CORE'],
		variations: ['SLOW', 'LOW_IMPACT', 'ALTERNATING'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
	},
	{
		name: 'WRIST_CIRCLES',
		positions: ['STANDING', 'SEATED', 'KNEELING'],
		muscles: ['FOREARM', 'EXTENSORS', 'FLEXORS'],
		bodyParts: ['FOREARMS'],
		bodySections: ['ARMS'],
		variations: ['SLOW', 'LOW_IMPACT', 'SEATED', 'ON_KNEES', 'ALTERNATING'],
		demos: ['https://youtu.be/2nIqcxAyBh4?si=rj8JW3XPhHRfXyS-'],
		embeds: ['2nIqcxAyBh4?si=xmosRzdrTv0HBfXz'],
		categories: ['CALISTHENICS', 'MOBILITY'],
	},
	{
		name: 'WRIST_ROLLS',
		positions: ['STANDING', 'SEATED', 'KNEELING'],
		muscles: ['FOREARM', 'EXTENSORS', 'FLEXORS'],
		bodyParts: ['FOREARMS'],
		bodySections: ['ARMS'],
		variations: ['SLOW', 'LOW_IMPACT', 'SEATED', 'ON_KNEES', 'ALTERNATING'],
		demos: ['https://youtu.be/2nIqcxAyBh4?si=rj8JW3XPhHRfXyS-'],
		embeds: ['2nIqcxAyBh4?si=xmosRzdrTv0HBfXz'],
		categories: ['CALISTHENICS', 'MOBILITY'],
	}
];
