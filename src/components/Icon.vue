<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

type Props = {
    name: string
    fill?: string
    color?: string
}


const props = withDefaults(defineProps<Props>(), {
    fill: 'none',
    color: 'teal'
})



</script>

<template>
    <!-- chevron_down -->
    <svg
        v-if="props.name === 'chevron_down'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="chevron_down"
        viewBox="0 0 24 24"
    >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
    <!-- chevron_right -->
    <svg
        v-if="props.name === 'chevron_right'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="chevron_right"
        viewBox="0 0 24 24"
    >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>

    <!-- user -->
    <svg
        v-if="props.name === 'user'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="user"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
    </svg>
    <!-- home -->
    <svg
        v-if="props.name === 'home'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="home"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
    </svg>
    <!-- check -->
    <svg
        v-if="props.name === 'check'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="check"
        viewBox="0 0 24 24"
    >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
    <!-- check_circle -->
    <svg
        v-if="props.name === 'check_circle'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="check_circle"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
    <!-- info_circle -->
    <svg
        v-if="props.name === 'info_circle'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="info_circle"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
    <!-- x_circle -->
    <svg
        v-if="props.name === 'x_circle'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="x_circle"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
    <!-- exclamation -->
    <svg
        v-if="props.name === 'exclamation'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="exclamation"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
    </svg>
    <!-- briefcase -->
    <svg
        v-if="props.name === 'briefcase'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="briefcase"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
    </svg>
    <!-- dotv -->
    <svg
        v-if="props.name === 'dotv'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="dotv"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        />
    </svg>
    <!-- menu -->
    <svg
        v-if="props.name === 'menu'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="menu"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
        />
    </svg>
    <!-- menu_alt -->
    <svg
        v-if="props.name === 'menu_alt'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="menu_alt"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
        />
    </svg>
    <!-- adjust -->
    <svg
        v-if="props.name === 'adjust'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="adjust"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
    </svg>
    <!-- switch -->
    <svg
        v-if="props.name === 'switch'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="switch"
        viewBox="0 0 20 20"
    >
        <path
            d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"
        />
    </svg>
    <!-- cog -->
    <svg
        v-if="props.name === 'cog'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="cog"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
    </svg>
    <!-- users -->
    <svg
        v-if="props.name === 'users'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="users"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
    <!-- code -->
    <svg
        v-if="props.name === 'code'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="code"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
    </svg>
    <!-- trash -->
    <svg
        v-if="props.name === 'trash'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="trash"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
    </svg>
    <!-- lock -->
    <svg
        v-if="props.name === 'lock'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="lock"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
    </svg>

    <svg
        v-if="props.name === 'chevron_down'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="refresh"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
    </svg>
    <!-- refresh -->
    <svg
        v-if="props.name === 'refresh'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="plus"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
    </svg>
    <!-- doc -->
    <svg
        v-if="props.name === 'doc'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="doc"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
    </svg>
    <!-- download -->
    <svg
        v-if="props.name === 'download'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="download"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
    </svg>
    <!-- arrow_left -->
    <svg
        v-if="props.name === 'arrow_left'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="arrow_left"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
    </svg>
    <!-- pencil -->
    <svg
        v-if="props.name === 'pencil'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="pencil"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
    </svg>
    <!-- x -->
    <svg
        v-if="props.name === 'x'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="x"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
    <!-- shopping_cart -->
    <svg
        v-if="props.name === 'shopping_cart'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="shopping_cart"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
    </svg>
    <!-- shopping_bag -->
    <svg
        v-if="props.name === 'shopping_bag'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="shopping_bag"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
    </svg>
    <!-- shopping_bag_plin -->
    <svg
        v-if="props.name === 'shopping_bag_plin'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="shopping_bag_plin"
        viewBox="0 0 20 20"
    >
        <path
            fill-rule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clip-rule="evenodd"
        />
    </svg>
    <!-- user_group -->
    <svg
        v-if="props.name === 'user_group'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="user_group"
        viewBox="0 0 20 20"
    >
        <path
            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
        />
    </svg>
    <!-- mail -->
    <svg
        v-if="props.name === 'mail'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="mail"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
    </svg>
    <!-- list -->
    <svg
        v-if="props.name === 'list'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="list"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
    </svg>
    <!-- view_list -->
    <svg
        v-if="props.name === 'view_list'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="view_list"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
    </svg>
    <!-- logout -->
    <svg
        v-if="props.name === 'logout'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        id="logout"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
    </svg>
    <!-- globe -->
    <svg
        v-if="props.name === 'globe'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
    </svg>
    <!-- bell -->
    <svg
        v-if="props.name === 'bell'"
        :fill="props.fill"
        v-bind="$attrs"
        stroke="currentColor"
        viewBox="0 0 20 20"
    >
        <path
            d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
        />
    </svg>

    <svg
        v-if="props.name === 'search'"
        :fill="props.fill"
        v-bind="$attrs"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
    </svg>
</template>
